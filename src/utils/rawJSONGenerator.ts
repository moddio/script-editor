import { ExtraDataProps } from "../components/TextScriptEditor";
import { replaceFunctionWithType } from "../components/TextScriptEditorMultiline";
import { RawJSON } from "../constants/types";
import { postProcessOutput } from "./actions";
import { removeUnusedProperties } from "./obj";
const SKIPS = ["_startIdx", "_variant"]
export const STRUCTS = {
  if: {
    type: "condition",
    conditions: null,
    then: [],
    else: [],
    _startIdx: 1,
  },
  forAllItems: {
    type: "forAllItems",
    itemGroup: null,
    actions: [],
    _startIdx: 1
  },
  while: {
    type: "while",
    conditions: null,
    actions: [],
    _startIdx: 1,
  },
  repeat: {
    type: "repeat",
    count: null,
    actions: [],
    _startIdx: 1,
  },
  forAllEntities: {
    type: "forAllEntities",
    entityGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllItemTypes: {
    type: "forAllItemTypes",
    itemTypeGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllProjectiles: {
    type: "forAllProjectiles",
    projectileGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllRegions: {
    type: "forAllRegions",
    regionGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllUnitTypes: {
    type: "forAllUnitTypes",
    unitTypeGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllPlayers: {
    type: "forAllPlayers",
    playerGroup: null,
    actions: [],
    _startIdx: 1
  },
  for: {
    type: "forAllUnitTypes",
    _variant: null,
    actions: [],
    _startIdx: 1
  },
  forAllDebris: {
    type: "forAllDebris",
    debrisGroup: null,
    actions: [],
    _startIdx: 1
  },
  forAllUnits: {
    type: "forAllUnits",
    unitGroup: null,
    actions: [],
    _startIdx: 1
  },
  forIn: {
    type: "forIn",
    _variant: null,
    actions: [],
    _startIdx: 1
  },

}

export default class RawJSONGenerator {
  private _triggers: { type: string }[] = [];
  private _conditions = [
    {
      "operator": "==",
      "operandType": "boolean"
    },
    true,
    true
  ];
  private _actions: Record<string, any>[] = [];
  private _unUsedComment: string = '';

  private _name: string;
  private _parent: string | null;
  private _key: string;
  private _order: number;
  private _isProtected: boolean;
  private _nextStruct: { currentKeyIdx: number, struct: typeof STRUCTS[keyof typeof STRUCTS] }[] = [];

  constructor({ name, parent, key, order, isProtected }: Pick<RawJSON, 'isProtected' | 'name' | 'parent' | 'key' | 'order'>) {
    this._name = name
    this._parent = parent
    this._key = key
    this._order = order
    this._isProtected = isProtected
  }

  public insertTriggers(trigger: { type: string }) {
    this._triggers.push(trigger)
  }

  public insertComment(comment: string) {
    this._unUsedComment += (this._unUsedComment !== '' ? '\n' : '') + comment;
  }

  public setStruct(key: keyof typeof STRUCTS) {
    this._nextStruct.push({ currentKeyIdx: STRUCTS[key]._startIdx, struct: JSON.parse(JSON.stringify(STRUCTS[key])) })
  }

  public goToNextKey() {
    if (this._nextStruct.length > 0) {
      this._nextStruct[this._nextStruct.length - 1].currentKeyIdx += 1
    }
  }

  public removeStruct(extraData?: ExtraDataProps) {
    if (this._nextStruct.length > 0) {
      if (this._nextStruct.length === 1) {
        this._actions.push(postProcessOutput(this._nextStruct[this._nextStruct.length - 1].struct, extraData))
        this._nextStruct = []
      } else {
        const keys = Object.keys(this._nextStruct[this._nextStruct.length - 2].struct)
        const key = keys[this._nextStruct[this._nextStruct.length - 2].currentKeyIdx]
        const nowObj: any = (this._nextStruct[this._nextStruct.length - 2].struct as any)[key];
        const action = this._nextStruct[this._nextStruct.length - 1].struct
        if (!SKIPS.includes(key)) {
          if (nowObj === null) {
            (this._nextStruct[this._nextStruct.length - 2].struct as any)[key] = action
          } else {
            if (typeof nowObj === 'object' && Array.isArray(nowObj)) {
              nowObj.push(key === 'actions' ? replaceFunctionWithType(action as any) : action)
            }
          }
        }
        this._nextStruct = this._nextStruct.splice(this._nextStruct.length - 2, 1)
      }

    }
  }

  public insertAction(action: Record<string, any> | Array<any>, extraData?: ExtraDataProps) {
    if (this._nextStruct.length > 0) {
      const keys = Object.keys(this._nextStruct[this._nextStruct.length - 1].struct)
      const key = keys[this._nextStruct[this._nextStruct.length - 1].currentKeyIdx]
      const nowObj: any = (this._nextStruct[this._nextStruct.length - 1].struct as any)[key];
      if (key === '_variant') {
        Object.keys(action).forEach((k) => {
          if (!SKIPS.includes(k)) {
            (this._nextStruct[this._nextStruct.length - 1].struct as any)[k] = action[k as keyof typeof action]
          }
        })
      } else {
        if (nowObj === null) {
          (this._nextStruct[this._nextStruct.length - 1].struct as any)[key] = action[key as keyof typeof action] as Array<any> ?? action
        } else {
          if (typeof nowObj === 'object' && Array.isArray(nowObj)) {
            nowObj.push(key === 'actions' ? replaceFunctionWithType(action as any) : action)
          }
        }
      }


      // if (this._nextStruct[this._nextStruct.length - 1].currentKeyIdx === keys.length - 2) {
      //   this.removeStruct()
      // }
    } else {
      const newAction = action as Record<string, any>;
      if (this._unUsedComment !== '') {
        newAction.comment = this._unUsedComment
        this._unUsedComment = ''
      }
      this._actions.push(postProcessOutput(newAction, extraData))
    }

  }

  public generateRawJSON() {
    return {
      isProtected: this._isProtected,
      triggers: this._triggers,
      conditions: this._conditions,
      actions: this._actions,
      name: this._name,
      parent: this._parent,
      key: this._key,
      order: this._order
    }
  }
}