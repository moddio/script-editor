export const removeUnusedProperties = (obj: { [key: string]: any }): { [P in keyof typeof obj as P extends string ? P extends `_${infer _}` ? never : P : never]: typeof obj[P] } => {
  const newObj: { [P in keyof typeof obj as P extends string ? P extends `_${infer _}` ? never : P : never]: typeof obj[P] } = {}
  Object.keys(obj).map(key => {
    if (!key.startsWith('_')) {
      newObj[key] = typeof obj[key] === 'object' ? removeUnusedProperties(obj[key]) : obj[key]
    }
  })
  return newObj
}