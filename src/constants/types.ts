export type AnyObject = { [key: string]: any }

export interface Trigger {
  type: string
}
export interface RawJSON {
  triggers: Trigger[]
  conditions: [
    {
      "operator": "==",
      "operandType": "boolean"
    },
    true,
    true
  ],
  isProtected: boolean,
  actions: Record<string, any>[],
  name: string,
  parent: string | null,
  key: string,
  order: number
}