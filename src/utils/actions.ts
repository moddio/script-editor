import { AnyObject } from "../constants/types"
import { ACTIONS } from "../constants/tmp"
import { ExtraDataProps, FunctionProps } from "../components/TextScriptEditor"
import { editor, languages } from "monaco-editor"
import { Editor, Monaco } from '@monaco-editor/react'
import axios from 'axios'
import { aliasTable } from "script-parser"
import { KEYWORDS } from "../constants/monacoConfig"
import { removeUnusedProperties } from "./obj"

export interface ColumnRange {
  startColumn: number,
  endColumn: number
}

const res = await axios.get('https://www.modd.io/api/editor-api/?game=two-houses')
let actionsCache: any[] = res.data.message


export const hasDefaultSuggestions = (suggestions: languages.CompletionItem[]) => {

}

export const postProcessOutput = (output: AnyObject, extraData: ExtraDataProps = { thisEntity: [] }) => {
  const newOutput = removeUnusedProperties(output, extraData, [setVariableDataTypeAndEntityType])
  return newOutput
}

export const setVariableDataTypeAndEntityType = (k: string, v: any, extraData: ExtraDataProps) => {
  if (v === undefined) return
  if (v['function'] === 'getValueOfEntityVariable' && v['entity']?.['function'] === 'thisEntity') {
    const targetData = extraData.thisEntity.find((data) => data.key === v['variable']?.['variable']?.text)
    if (targetData) {
      v['variable']['variable'].dataType = targetData.dataType
      v['variable']['variable'].entity = targetData.entity
    }

  }
}

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
  const targetAction = getActions().find((obj) => (aliasTable[obj.key] ?? obj.key) === functionProps.functionName || obj.key === functionProps.functionName)
  if (targetAction) {
    const targetFrag: any = targetAction.data.fragments.filter((frag: any) => frag.type === 'variable')[functionProps.functionParametersOffset]
    return targetFrag?.extraData?.type || targetFrag?.extraData?.dataType || targetFrag?.extraData?.dataTypes || targetFrag?.dataType
  }
  return ''
}

export const findFunctionPos = (s: string, functionName: string) => {
  const startColumn = s.indexOf(functionName)
  const endColumn = startColumn + (functionName ? functionName.length : 0) - 1
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
  if (typeof obj !== 'object' || obj._returnType === undefined) {
    return []
  }

  const functionName = obj['function']
  if (functionName) {
    const type = getReturnType(functionName)
    if (obj._returnType === defaultReturnType || defaultReturnType?.includes(obj._returnType) || (obj._returnType === 'entity' && !constantTypes.includes(defaultReturnType || ''))) {

    } else {
      if (type !== defaultReturnType && !entityEqual(type, defaultReturnType) && !(type === 'string' && defaultReturnType?.includes('Type'))) {
        const { startColumn, endColumn } = findFunctionPos(s, functionName)
        ranges.push(
          {
            message: `output type error: expect ${defaultReturnType} in ${functionName} here, but got ${type}`,
            severity: 8,
            startLineNumber: 0,
            startColumn,
            endLineNumber: 0,
            endColumn,
          }
        )
      }
    }
  }
  Object.keys(obj).filter(key => !inValidKeys.includes(key) && !key.startsWith('_')).forEach((key, idx) => {
    const nestedObj = obj[key]
    const inputType = getInputProps({ functionName: functionName, functionParametersOffset: idx })
    if (typeof nestedObj === 'object') {
      ranges.push(...checkTypeIsValid(s, nestedObj, inputType))
    } else {
      if (typeof nestedObj !== inputType || entityEqual(typeof nestedObj, inputType)) {
        if (Array.isArray(inputType) && inputType.includes(typeof nestedObj)) {
        } else {
          const { startColumn, endColumn } = findParametersPos(s, functionName, idx)
          ranges.push(
            {
              message: `input type error: expect ${inputType} in ${functionName}, but got ${typeof nestedObj}`,
              severity: 8,
              startLineNumber: 0,
              startColumn,
              endLineNumber: 0,
              endColumn,
            }
          )
        }
      }
    }
  })
  return ranges;
}

const searchChars = ['"', "'", ")"]
const constantTypes = ['string', 'number', 'boolean']
const multiTypes = ['entity', 'Multiple']

export const filterPipe = (defaultReturnType: string | undefined, inputProps: string, category: string | undefined) => {
  return equalTypeFilter(inputProps, category) ||
    defaultReturnTypeFilter(defaultReturnType, inputProps, category) ||
    extraFilter(inputProps, category)
}

export const equalTypeFilter = (inputProps: string, category: string | undefined) => {
  if (inputProps === category) {
    return true
  }
  return false
}



export const entityEqual = (a: any, b: any) => {
  if ((!constantTypes.includes(a) && multiTypes.includes(b)) || (!constantTypes.includes(b) && multiTypes.includes(a))) {
    return true
  }
  return false
}

export const extraFilter = (inputProps: string, category: string | undefined) => {
  if (!constantTypes.includes(inputProps) && category && multiTypes.includes(category)) {
    return true
  }
  return false
}

export const checkSuggestions = (obj: any, inputProps: string, defaultReturnType: string | undefined) => {
  let value = ''

  if (inputProps === '') {
    if (defaultReturnType) {
      value = defaultReturnType
    } else {
      return 'c'
    }
  } else {
    value = inputProps
  }
  if (obj.data.category === value) {
    return 'b'
  }
  return 'c'
}

export const orderSuggestions = (arr: any[], inputProps: string, defaultReturnType: string | undefined) => {
  let value = ''
  if (inputProps === '') {
    if (defaultReturnType) {
      value = defaultReturnType
    } else {
      return arr
    }
  } else {
    value = inputProps
  }
  const sortedArr = arr.sort(function (a, b) {
    if (a.data.category === value && b.data.category !== value) {
      return -1;
    } else if (a.data.category !== value && b.data.category === value) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedArr
}

export const defaultReturnTypeFilter = (defaultReturnType: string | undefined, inputProps: string, category: string | undefined) => {
  if (inputProps === '' && (!defaultReturnType || category === defaultReturnType)) {
    return true
  }
  return false
}


export const getFunctionProps = (s: string, cursorPos: number): FunctionProps => {
  let output: FunctionProps =
  {
    functionName: "",
    functionParametersOffset: 0
  }
  let offset = 0;
  let searchChar = '';
  for (let i = cursorPos; i >= 0; i--) {
    if (searchChar !== '') {
      if (s[i] === searchChar) {
        searchChar = ''
      }
      continue
    }
    if (searchChars.includes(s[i])) {
      searchChar = s[i]
      if (s[i] === ')') {
        searchChar = '('
        offset += 1
      }
      continue
    }
    if (KEYWORDS.includes(output.functionName)) {
      if (offset === 0) {
        return output
      } else {
        offset -= 1
      }
    }
    if (/^[a-zA-Z0-9_]+$/.test(s[i])) {
      output.functionName = s[i] + output.functionName
    } else {
      if (s[i] === ',') {
        output.functionParametersOffset += 1
      } else {
        output.functionName = ''
      }
    }
  }
  return output;
}

export const checkIsWrappedInQuotes = (s: string, pos: number) => {
  let searchChar = ''
  for (let i = 0; i < s.length; i++) {
    if (searchChar !== '') {
      if (pos <= i) {
        return true
      }
      if (s[i] === searchChar) {
        searchChar = ''
      }
      continue
    }
    if (s[i] === '"' || s[i] === "'") {
      searchChar = s[i]
    }
  }
  return false
}

export const checkIsFunction = (s: string, pos: number) => {
  let blacklistChars = ['(', '"', "'", ")"]
  for (let i = pos; i > 0; i--) {
    if (blacklistChars.includes(s[i])) {
      return true
    }
    if (s[i] === '.') {
      return false
    }
  }
  return true
}
