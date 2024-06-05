import { ExtraDataProps } from "../components/TextScriptEditor";
import { replaceFunctionWithType } from "../components/TextScriptEditorMultiline";
import { RawJSON } from "../constants/types";
import { postProcessOutput } from "./actions";
import { removeUnusedProperties } from "./obj";
const SKIPS = ["_startIdx", "_variant"]
const NEEDREPLACEKEYS = ['actions', 'then', 'else']
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
    type: "for",
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
  setTimeOut: {
    type: "setTimeOut",
    duration: null,
    actions: [],
    _startIdx: 1
  },
  repeatWithDelay: {
    type: "forIn",
    _variant: null,
    actions: [],
    _startIdx: 1
  }
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
  private _unUsedComment: string[] = [];
  private _unUsedDisabled: boolean[] = [];

  private _name: string;
  private _parent: string | null;
  private _key: string;
  private _order: number;
  private _isProtected?: boolean;
  private _isWorld?: boolean;
  private _nextStruct: {
    currentKeyIdx: number,
    struct: typeof STRUCTS[keyof typeof STRUCTS]
  }[] = [];

  constructor({ name, parent, key, order, isProtected, isWorld }: Pick<RawJSON, 'isProtected' | 'name' | 'parent' | 'key' | 'order' | 'isWorld'>) {
    this._name = name
    this._parent = parent
    this._key = key
    this._order = order
    this._isProtected = isProtected
    this._isWorld = isWorld
  }

  public insertTriggers(trigger: { type: string }) {
    this._triggers.push(trigger)
  }

  public getNextStruct() {
    return this._nextStruct
  }

  public insertComment(o: Record<string, any>) {
    const comment = this._unUsedComment.pop()
    if (comment !== '' && comment !== undefined) {
      o.comment = comment
    }
  }

  public insertDisabled(o: Record<string, any>) {
    const disabled = this._unUsedDisabled.pop()
    if (disabled !== undefined) {
      o.disabled = disabled
    }
  }

  public insertUnusedDisabled() {
    this._unUsedDisabled.push(true)
  }

  public insertUnusedComment(comment: string, forcePush: boolean = false) {
    if (this._unUsedComment.length > 0 && forcePush !== true) {
      const nowIdx = Math.max(this._unUsedComment.length - 1, 0)
      this._unUsedComment[nowIdx] += (this._unUsedComment[nowIdx] !== '' ? '\n' : '') + comment;
    } else {
      this._unUsedComment.push(comment)
    }
  }

  public setStruct(key: keyof typeof STRUCTS, disabled: boolean = false) {
    this._nextStruct.push({ currentKeyIdx: STRUCTS[key]._startIdx, struct: { ...JSON.parse(JSON.stringify(STRUCTS[key])), disabled } })
    this.insertUnusedComment('', true);
    this.insertUnusedComment('', true);
  }

  public goToNextKey() {
    if (this._nextStruct.length > 0) {
      this._nextStruct[this._nextStruct.length - 1].currentKeyIdx += 1
    }
  }

  public removeStruct(extraData?: ExtraDataProps) {
    if (this._nextStruct.length > 0) {
      if (this._nextStruct.length === 1) {
        const o = postProcessOutput(this._nextStruct[this._nextStruct.length - 1].struct, extraData)
        this.insertComment(o)
        this.insertDisabled(o)
        this._actions.push(o)
        this._nextStruct = []
      } else {
        const keys = Object.keys(this._nextStruct[this._nextStruct.length - 2].struct)
        const key = keys[this._nextStruct[this._nextStruct.length - 2].currentKeyIdx]
        const nowObj: any = (this._nextStruct[this._nextStruct.length - 2].struct as any)[key];
        const action = this._nextStruct[this._nextStruct.length - 1].struct
        this.insertComment(action)
        this.insertDisabled(action)
        if (!SKIPS.includes(key)) {
          if (nowObj === null) {
            (this._nextStruct[this._nextStruct.length - 2].struct as any)[key] = action
          } else {
            if (typeof nowObj === 'object' && Array.isArray(nowObj)) {
              nowObj.push(NEEDREPLACEKEYS.includes(key) ? replaceFunctionWithType([action] as any)[0] : action)
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
        if (this._unUsedComment.length > 0) {
          this.insertComment(this._nextStruct[this._nextStruct.length - 1].struct)
          this.insertDisabled(this._nextStruct[this._nextStruct.length - 1].struct)
        }
      } else {
        this.insertComment(action)
        this.insertDisabled(action)
        if (nowObj === null) {
          (this._nextStruct[this._nextStruct.length - 1].struct as any)[key] = action[key as keyof typeof action] as Array<any> ?? action
        } else {
          if (typeof nowObj === 'object' && Array.isArray(nowObj)) {
            nowObj.push(NEEDREPLACEKEYS.includes(key) ? replaceFunctionWithType([action] as any)[0] : action)
          }
        }
      }


      // if (this._nextStruct[this._nextStruct.length - 1].currentKeyIdx === keys.length - 2) {
      //   this.removeStruct()
      // }
    } else {
      const newAction = action as Record<string, any>;
      this.insertComment(newAction)
      this.insertDisabled(newAction)
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