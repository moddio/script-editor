import axios from "axios"

const res = await axios.get('https://www.modd.io/api/editor-api/?game=two-houses&type=trigger')
let triggersCache: any[] = res.data.message

export const getTriggers = () => {
  return triggersCache
}
