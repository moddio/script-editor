import { RawJSON } from "../constants/types";

export const STRUCTS = {
  if: {
    type: "condition",
    conditions: null,
    then: [],
    else: [],
    _startIdx: 1,
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
  private _unUsedComment: string = '';

  private _name: string;
  private _parent: string | null;
  private _key: string;
  private _order: number;
  private _isProtected: boolean;
  private _nextStruct: null | { currentKeyIdx: number, struct: typeof STRUCTS[keyof typeof STRUCTS] } = null;

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
    this._nextStruct = { currentKeyIdx: STRUCTS[key]._startIdx, struct: JSON.parse(JSON.stringify(STRUCTS[key])) }
  }

  public goToNextKey() {
    if (this._nextStruct !== null) {
      this._nextStruct.currentKeyIdx += 1
    }
  }

  public removeStruct() {
    if (this._nextStruct !== null) {
      this._actions.push(this._nextStruct.struct)
    }
    console.log('submit', this._nextStruct?.struct)
    this._nextStruct = null
  }

  public insertAction(action: Record<string, any> | Array<any>) {
    if (this._nextStruct !== null) {
      console.log(this._nextStruct)
      const keys = Object.keys(this._nextStruct.struct)
      const key = keys[this._nextStruct.currentKeyIdx]
      const nowObj: any = (this._nextStruct.struct as any)[key];
      console.log(key)
      if (nowObj === null) {
        (this._nextStruct.struct as any)[key] = action as Array<any>
      } else {
        if (typeof nowObj === 'object' && Array.isArray(nowObj)) {
          nowObj.push(action)
        }
      }

      if (this._nextStruct.currentKeyIdx === keys.length - 2) {
        this.removeStruct()
      }
    } else {
      const newAction = action as Record<string, any>;
      if (this._unUsedComment !== '') {
        newAction.comment = this._unUsedComment
        this._unUsedComment = ''
      }
      this._actions.push(newAction)
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