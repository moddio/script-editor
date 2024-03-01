import { RawJSON } from "../constants/types";

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

  public insertAction(action: Record<string, any>) {
    const newAction = action;
    if (this._unUsedComment !== '') {
      newAction.comment = this._unUsedComment
      this._unUsedComment = ''
    }
    this._actions.push(newAction)
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