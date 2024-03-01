import axios from "axios"

const res = await axios.get('https://www.modd.io/api/editor-api/?game=two-houses')
let triggersCache: any[] = res.data.message

export const getActions = () => {
  return triggersCache
}
