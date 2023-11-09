import { AnyObject } from "../constants/types"
import { ACTIONS } from "../constants/tmp"
import { FunctionProps, entityEqual } from "../components/TextScriptEditor"
import { editor } from "monaco-editor"
import { Editor, Monaco } from '@monaco-editor/react'
import axios from 'axios'
import { aliasTable } from "script-parser"

export interface ColumnRange {
  startColumn: number,
  endColumn: number
}

const res = await axios.get('https://www.modd.io/api/editor-api/?game=two-houses')
let actionsCache: any[] = res.data.message

export const getActions = () => {
  return actionsCache
}

export const getReturnType = (functionName: string) => {
  let returnType: string | undefined
  const actions = getActions()
  returnType = getActions().find(action => action.key === functionName)?.data.category
  if (functionName === 'calculate') {
    return 'number'
  }
  return returnType
}

export const getInputProps = (functionProps: FunctionProps) => {
  const targetAction = getActions().find((obj) => aliasTable[obj.key] ?? obj.key === functionProps.functionName)
  if (targetAction) {
    const targetFrag: any = targetAction.data.fragments.filter((frag: any) => frag.type === 'variable')[functionProps.functionParametersOffset]
    if (targetFrag) {
      if (targetFrag.extraData) {
        return targetFrag.extraData.dataType
      } else if (targetFrag.dataType) {
        return targetFrag.dataType
      }
    }
  }
  return ''
}

export const findFunctionPos = (s: string, functionName: string) => {
  const startColumn = s.indexOf(functionName)
  const endColumn = startColumn + functionName.length - 1
  return {
    startColumn,
    endColumn
  }
}

export const findParametersPos = (s: string, functionName: string, offset: number): ColumnRange => {
  let { endColumn } = findFunctionPos(s, functionName)
  endColumn += 2;
  let startColumn = endColumn
  let count = 0
  let searchChar = ''
  for (let i = endColumn; i < s.length; i++) {
    if (searchChar !== '') {
      if (s[i] === searchChar) {
        searchChar = ''
      }
      continue
    }
    if (s[i] === '(') {
      searchChar = ')'
      continue
    }
    if (s[i] === ',') {
      if (count === offset) {
        endColumn = i + 1
        break
      } else {
        startColumn = i + 3
      }
    }
  }
  return { startColumn, endColumn }
}

const inValidKeys = [
  'function',
  'items',
  'vars'
];

export const checkTypeIsValid = (s: string, obj: AnyObject, defaultReturnType: string | undefined): editor.IMarkerData[] => {
  const ranges: editor.IMarkerData[] = []
  if (typeof obj !== 'object') {
    return []
  }
  const functionName = obj['function']
  if (functionName) {
    const type = getReturnType(functionName)
    if (type !== defaultReturnType && !entityEqual(type, defaultReturnType)) {
      const { startColumn, endColumn } = findFunctionPos(s, functionName)
      ranges.push(
        {
          message: `expect ${defaultReturnType} here, but got ${type}`,
          severity: 8,
          startLineNumber: 0,
          startColumn,
          endLineNumber: 0,
          endColumn,
        }
      )
    }
  }
  Object.keys(obj).filter(key => !inValidKeys.includes(key)).map((key, idx) => {
    const nestedObj = obj[key]
    const inputType = getInputProps({ functionName: functionName, functionParametersOffset: idx })
    if (typeof nestedObj === 'object') {
      ranges.push(...checkTypeIsValid(s, nestedObj, inputType))
    } else {
      if (typeof nestedObj !== inputType || entityEqual(typeof nestedObj, inputType)) {
        const { startColumn, endColumn } = findParametersPos(s, functionName, idx)
        ranges.push(
          {
            message: `expect ${inputType} here, but got ${typeof nestedObj}`,
            severity: 8,
            startLineNumber: 0,
            startColumn,
            endLineNumber: 0,
            endColumn,
          }
        )
      }
    }
  })
  return ranges;
}