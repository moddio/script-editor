import { AnyObject } from "../constants/types"
import { ACTIONS } from "../constants/tmp"
import { ExtraDataProps, FunctionProps } from "../components/TextScriptEditor"
import { editor, languages } from "monaco-editor"
import { Editor, Monaco } from '@monaco-editor/react'
import axios from 'axios'
import { aliasTable } from "script-parser"
import { KEYWORDS } from "../constants/monacoConfig"
import { Effect as E } from "effect";
import { removeUnusedProperties } from "./obj"
import { SmartIterationString } from "./string"

export interface ColumnRange {
  startColumn: number,
  endColumn: number
}

const res = await axios.get('https://www.modd.io/api/editor-api/?game=two-houses')
let actionsCache: any[] = res.data.message

export const getActions = () => {
  return actionsCache
}

export const hasDefaultSuggestions = (suggestions: languages.CompletionItem[]) => {

}

export const postProcessOutput = (output: AnyObject, extraData: ExtraDataProps = {
  thisEntity: []
}) => {
  const newOutput = removeUnusedProperties(output, extraData, [setVariableDataTypeAndEntityType])
  return newOutput
}

export const setVariableDataTypeAndEntityType = (k: string, v: any, extraData: ExtraDataProps) => {
  if (v === undefined) return
  if (v['function'] === 'getValueOfEntityVariable') {
    if (v['entity']?.['function'] === 'thisEntity') {
      const targetData = extraData.thisEntity.find((data) => data.key === v['variable']?.['variable']?.text)
      if (targetData) {
        v['variable']['variable'].dataType = targetData.dataType
        v['variable']['variable'].entity = targetData.entity
      }
    }
  }
}



// if u want to custom some funcs' return type, u can do it here
export const getReturnType = (functionName: string) => {
  let returnType: string | undefined
  const actions = getActions()
  returnType = actions.find(action => action.key === functionName)?.data.category
  switch (functionName) {
    case 'calculate':
      return 'number'
  }
  return returnType
}

export const getInputProps = (functionProps: FunctionProps) => {
  const targetAction = getActions().find((obj) => (aliasTable[obj.key as keyof typeof aliasTable] ?? obj.key) === functionProps.functionName || obj.key === functionProps.functionName)
  if (targetAction) {
    switch (targetAction.key) {
      case 'runScript': {
        return 'string'
      }
    }
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
  // += 2 to skip the (
  endColumn += 2;
  let startColumn = endColumn
  let count = 0
  E.runSync(SmartIterationString({
    s,
    idx: endColumn,
    step: 1,
    break: false,
    searchChar: [{ from: ['('], to: ')' }],
    funcToEachChar: (iter) => {
      if (iter.s[iter.idx] === ',') {
        if (count === offset) {
          endColumn = iter.idx + 1
          iter.break = true
        } else {
          startColumn = iter.idx + 3
        }
      }
      return iter
    }
  }))

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
      if (defaultReturnType !== '' && defaultReturnType !== undefined && type !== defaultReturnType && !entityEqual(type, defaultReturnType) && !(type === 'string' && defaultReturnType?.includes('Type'))) {
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

const constantTypes = ['string', 'number', 'boolean']
const multiTypes = ['entity', 'Multiple']

export const filterPipe = (defaultReturnType: string | undefined, inputProps: string, category: string | undefined) => {
  return equalTypeFilter(inputProps, category) ||
    defaultReturnTypeFilter(defaultReturnType, inputProps, category) ||
    extraFilter(inputProps, category)
}

export const equalTypeFilter = (inputProps: string, category: string | undefined) => inputProps === category

export const entityEqual = (a: any, b: any) =>
  (!constantTypes.includes(a) && multiTypes.includes(b)) || (!constantTypes.includes(b) && multiTypes.includes(a))

export const extraFilter = (inputProps: string, category: string | undefined) =>
  !constantTypes.includes(inputProps) && category && multiTypes.includes(category)

export const checkSuggestions = (obj: any, inputProps: string, defaultReturnType: string | undefined) => {
  let value = ''

  if (inputProps === '') {
    if (defaultReturnType) {
      value = defaultReturnType
    } else {
      return 'c'
    }
  } else {
    value = inputProps ?? defaultReturnType
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

export const defaultReturnTypeFilter = (defaultReturnType: string | undefined, inputProps: string, category: string | undefined) =>
  inputProps === '' && (!defaultReturnType || category === defaultReturnType)

export interface movedStringProps {
  currentString: string,
  nextLineString: string
}

export const moveStringToNextLine = (s: string): movedStringProps => {
  let movedString: movedStringProps = {
    currentString: s,
    nextLineString: ''
  }

  E.runSync(SmartIterationString({
    searchChar: [{ from: ["'"] }, { from: ["'"] }],
    s,
    idx: 0,
    step: 1,
    break: false,
    funcToEachChar: (iter) => {
      if (iter.s[iter.idx] === '{' && iter.idx !== 0) {
        movedString.currentString = iter.s.slice(0, iter.idx)
        movedString.nextLineString = iter.s.slice(iter.idx, iter.s.length)
        iter.break = true
      }
      if (iter.s[iter.idx] === '}' && iter.idx !== iter.s.length - 1) {
        // TODO: handle }
        const tmp = moveStringToNextLine(iter.s.slice(iter.idx + 1, iter.s.length))
        movedString.nextLineString = tmp.nextLineString
        movedString.currentString = tmp.currentString
        iter.break = true
      }
      return iter
    }
  }))

  return movedString
}

export const getFunctionProps = (s: string, cursorPos: number): FunctionProps => {
  let output: FunctionProps = {
    functionName: "",
    functionParametersOffset: 0
  }
  let offset = 0;
  E.runSync(SmartIterationString({
    searchChar: [{ from: ['"'] }, { from: ["'"] }, { from: [')'], to: '(' }],
    s,
    idx: cursorPos,
    step: -1,
    break: false,
    funcToJumpedChar: (iter) => {
      if (iter.s[iter.idx] === ')') {
        offset += 1
      }
      return iter
    },
    funcToEachChar: (iter) => {
      if (KEYWORDS.includes(output.functionName)) {
        if (offset === 0 && (iter.s[iter.idx + iter.step] === undefined || /^[a-zA-Z0-9_]+$/.test(iter.s[iter.idx + iter.step]) === false)) {
          iter.break = true
          return iter
        } else {
          offset -= 1
        }
      }

      if (/^[a-zA-Z0-9_]+$/.test(iter.s[iter.idx])) {
        output.functionName = iter.s[iter.idx] + output.functionName
      } else {
        if (iter.s[iter.idx] === ',') {
          output.functionParametersOffset += 1
        } else {
          output.functionName = ''
        }
      }      
      return iter
    },
  }))  
  return output;
}

export const checkIsWrappedInQuotes = (s: string, pos: number) => {
  let wrappedInQuotes = s === '' ? false : true
  E.runSync(SmartIterationString({
    searchChar: [{ from: ['"'] }, { from: ["'"] }],
    s,
    idx: 0,
    step: 1,
    break: false,
    funcToEachChar: (iter) => {
      if (iter.idx === pos) {
        wrappedInQuotes = false
        iter.break = true
      }
      return iter
    },
  }))

  return wrappedInQuotes
}

/**
 * 
 * @param s string
 * @param pos start position
 * @returns 0 stands for function, 1 stands for attr, 2 stands for var
 */
export const getSuggestionType = (s: string, pos: number): number => {
  let blacklistChars = ['(', '"', "'", ")"]
  let type = 0
  E.runSync(SmartIterationString({
    searchChar: [{ from: ['"'] }, { from: ['"'] }],
    s,
    idx: pos,
    step: -1,
    break: false,
    funcToEachChar: (iter) => {
      iter.break = blacklistChars.includes(iter.s[iter.idx])
      if (iter.s[iter.idx] === '.') {
        type = iter.s[iter.idx + 1] === '$' ? 2 : 1
        iter.break = true
      }
      return iter
    },
  }))
  return type
}
