import { ExtraDataProps } from "../components/TextScriptEditor"

export const removeUnusedProperties = (obj: { [key: string]: any }, extraData: ExtraDataProps, effects?: ((k: string, v: any, extraData: ExtraDataProps) => void)[]): { [P in keyof typeof obj as P extends string ? P extends `_${infer _}` ? never : P : never]: typeof obj[P] } => {
  if (obj === undefined || obj === null || typeof obj !== 'object' || Array.isArray(obj)) { return obj }
  effects?.forEach((effect) => { effect('', obj, extraData) })
  const newObj: { [P in keyof typeof obj as P extends string ? P extends `_${infer _}` ? never : P : never]: typeof obj[P] } = {}
  Object.keys(obj).forEach(key => {
    if (!key.startsWith('_')) {
      effects?.forEach((effect) => { effect(key, obj[key], extraData) })
      newObj[key] = typeof obj[key] === 'object' && !Array.isArray(obj[key]) ? removeUnusedProperties(obj[key], extraData, effects) : obj[key]
    }
  })
  return newObj
}

