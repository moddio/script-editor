import { Editor, Monaco } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration, OPTIONS, FUNC } from '../constants/monacoConfig'
import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import { IDisposable, editor, languages } from 'monaco-editor'
import { aliasTable, parser, actionToString, noBracketsFuncs } from 'script-parser'
import { checkSuggestions, getSuggestionType, checkIsWrappedInQuotes, checkTypeIsValid, findFunctionPos, getActions, getInputProps, getFunctionProps, postProcessOutput, movedStringProps, moveStringToNextLine } from '../utils/actions'
import { findString } from '../utils/string'
import { ExtraDataProps, TextScriptErrorProps, triggerCharacters, triggerCharactersWithNumber } from './TextScriptEditor'
import RawJSONGenerator, { STRUCTS } from '../utils/rawJSONGenerator'
import { RawJSON } from '../constants/types'
import { getTriggers } from '../utils/triggers'

interface TextScriptEditorMultilineProps {
  debug: boolean,
  scriptId: string,
  rawJSON: RawJSON,
  defaultValue?: string,
  defaultReturnType?: string,
  extraSuggestions?: Record<string, languages.CompletionItem[]>,
  extraData?: ExtraDataProps,
  onError?: ({ e, output }: { e: string[], output: string | undefined }) => void,
  onSuccess?: (parserOutput: Record<string, any> | undefined) => void,
}

export function formatJSON(val: any = {}) {
  try {
    const res = JSON.parse(val);
    return JSON.stringify(res, null, 2)
  } catch {
    const errorJson = {
      "error": `invalid ${val}`
    }
    return JSON.stringify(errorJson, null, 2)
  }
}

const isComment = (s: string) => s.trim().startsWith('//');
const isTrigger = (s: string) => s.trim().startsWith('@');
export const replaceFunctionWithType = (a: Record<string, any>[]) => {
  return a.map((o) => {
    const newObject: any = {}
    Object.keys(o).forEach((k) => {
      if (k === 'function') {
        newObject.type = o[k]
      } else {
        newObject[k] = o[k]
      }
    })
    return newObject
  })
}

const multiScopesStrings = ['else']
const TextScriptEditorMultiline: React.FC<TextScriptEditorMultilineProps> = ({ onSuccess, onError, rawJSON, extraData, extraSuggestions, debug = false, defaultValue = '', defaultReturnType = '' }) => {
  const [parseStr, setParseStr] = useState<string | object>('')
  const [convertedStr, setConvertedStr] = useState('')
  const textRef = useRef<HTMLTextAreaElement | undefined>(undefined)
  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
  const monacoRef = useRef<Monaco | undefined>(undefined)
  const disposableRef = useRef<IDisposable[]>([])
  const stringToAction = (v?: string) => {
    editorRef.current?.getModel()?.setEOL(0)
    if (v === '') {
      onSuccess?.(undefined)
      setParseStr('')
      setConvertedStr('')
      monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
    } else {

      const { name, key, order, parent, isProtected } = rawJSON
      const json = new RawJSONGenerator({ name, key, order, parent, isProtected })
      const splitLine = v?.split('\n')
      if (splitLine) {
        let movedString: movedStringProps = {
          currentString: '',
          nextLineString: '',
        }
        const markers: editor.IMarkerData[] = []

        const monaco = monacoRef.current
        const editor = editorRef.current
        const model = editor!.getModel()
        for (let i = 0; i < splitLine.length; i++) {
          try {
            let value = ''
            let clearStruct = false
            value = movedString.nextLineString + splitLine[i]
            const movedProps = moveStringToNextLine(value.trim())
            movedString.nextLineString = movedProps.nextLineString
            value = movedProps.currentString.trim()
            if (value.startsWith('{')) {
              value = value.slice(1, value.length)
              json.goToNextKey()
            }
            if (value.endsWith('}')) {
              value = value.slice(0, value.length - 1)
              clearStruct = true
            }

            if (multiScopesStrings.includes(value)) {
              clearStruct = false
              continue
            }
            if (value !== '') {
              if (isComment(value)) {
                json.insertComment(value.replace('//', '').trim())
                continue
              }
              if (isTrigger(value)) {
                json.insertTriggers(parser.parse(value))
                continue
              }
              const funcProps = getFunctionProps(value, value.length - 1)
              if (STRUCTS[funcProps.functionName as keyof typeof STRUCTS]) {
                json.setStruct(funcProps.functionName as keyof typeof STRUCTS)
              }
              extraSuggestions?.[defaultReturnType || '_']?.forEach((suggest) => {
                if (value) {
                  switch (defaultReturnType) {
                    case 'unitType': {
                      value = value.replaceAll(new RegExp(`\\b${suggest.insertText}\\b(?![^"]*")`, 'g'), `"${suggest.detail}"`)
                      break;
                    }
                    case 'script': {
                      value = value.replaceAll(new RegExp(`\\b${suggest.insertText}\\b(?![^"]*")`, 'g'), `"${suggest.detail}"`)
                      break;
                    }
                  }
                }
              })
              const output = parser.parse(value)
              const processedOutput = typeof output === 'object' ? postProcessOutput(output, extraData) : output
              json.insertAction(processedOutput, extraData)
              // monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
              // if (typeof output === 'object') {
              //   const errors = checkTypeIsValid(value || '', output, defaultReturnType)
              //   if (errors.length === 0) {
              //     onSuccess?.(processedOutput)
              //   } else {
              //     onError?.({ e: errors.map((error) => error.message), output: processedOutput })
              //     // monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', errors)
              //   }
              // } else {
              //   if (defaultReturnType !== undefined && defaultReturnType !== '' && typeof output !== defaultReturnType && !(typeof output === 'string' && defaultReturnType?.includes('Type'))
              //     && !(typeof output === 'string' && defaultReturnType === 'script')
              //   ) {
              //     const message = `expect ${defaultReturnType} here, but got ${typeof output}`
              //     onError?.({ e: [message], output: undefined })
              //     // monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [{
              //     //   message,
              //     //   severity: 8,
              //     //   startLineNumber: i + 1,
              //     //   startColumn: 0,
              //     //   endLineNumber: i + 1,
              //     //   endColumn: value?.length || 0,
              //     // }])
              //   } else {
              //     onSuccess?.(processedOutput)
              //   }
              // }
            }
            if (clearStruct) {
              json.removeStruct(extraData)
            }
          } catch (e: any) {
            // const error: TextScriptErrorProps | Error = e
            // setParseStr(e)
            // if (editorRef.current && monacoRef.current) {
            //   const monaco = monacoRef.current
            //   const editor = editorRef.current
            //   const model = editor.getModel()
            //   if (model) {
            //     const errorHash = (error as TextScriptErrorProps).hash
            //     if (errorHash) {
            //       if (errorHash.expected) {
            //         const message = `expect ${errorHash.expected?.join(', ')} here, but got ${errorHash.token}`
            //         onError?.({ e: [message], output: undefined })
            //         // markers.push({
            //         //   message,
            //         //   severity: monaco.MarkerSeverity.Error,
            //         //   startLineNumber: i + 1,
            //         //   startColumn: errorHash.loc.first_column,
            //         //   endLineNumber: errorHash.loc.last_line,
            //         //   endColumn: i + 1,
            //         // });
            //       }
            //     } else {
            //       const undefinedName = value.replace(' is undefined', '')
            //       const { startColumn, endColumn } = findFunctionPos(value, undefinedName)
            //       onError?.({ e: [e.message as string], output: undefined })
            //       markers.push({
            //         message: e.message as string,
            //         severity: monaco.MarkerSeverity.Error,
            //         startLineNumber: i + 1,
            //         startColumn,
            //         endLineNumber: i + 1,
            //         endColumn,
            //       }
            //       )
            //     }

            //   }
            // }
          }
        }
        monaco!.editor.setModelMarkers(model!, 'owner', markers)
      }

      const jsonData = json.generateRawJSON()
      jsonData.actions = replaceFunctionWithType(jsonData.actions)
      setParseStr(jsonData)
      // TODO: add gameData
      setConvertedStr(actionToString({
        o: jsonData, parentKey: '', defaultReturnType: defaultReturnType || '', gameData: { unitTypes: {} }
      }))
      if (textRef?.current?.value) {
        textRef.current.value = JSON.stringify(jsonData)
      }
      onSuccess?.(jsonData)

    }


  }

  const init = (monaco: Monaco) => {
    // Register a tokens provider for the language
    disposableRef.current.push(monaco.languages.setMonarchTokensProvider(MODDIOSCRIPT, languageDef))
    // Set the editing configuration for the language
    disposableRef.current.push(monaco.languages.setLanguageConfiguration(MODDIOSCRIPT, configuration))
    disposableRef.current.push(monaco.languages.registerCompletionItemProvider(MODDIOSCRIPT, {
      triggerCharacters,
      provideCompletionItems: (model, position, context, token) => {
        let word = model.getWordUntilPosition(position);
        let range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };
        let cursorPos = position.column - 1;
        const code = model.getLineContent(position.lineNumber);
        const suggestionType = getSuggestionType(code, Math.max(0, cursorPos - 1))
        const needBrackets = (obj: any) => suggestionType === FUNC && !noBracketsFuncs.includes(obj.key)
        const inputProps = getInputProps(getFunctionProps(code, Math.max(0, cursorPos - 1)))
        const isTrigger = code.trim().startsWith('@')
        const suggestions: languages.CompletionItem[] = checkIsWrappedInQuotes(code, Math.max(0, cursorPos - 1)) ? [] :
          isTrigger ? getTriggers().map((obj, orderIdx) => ({
            label: obj.key,
            kind: monaco.languages.CompletionItemKind.Event,
            insertText: obj.key,
            sortText: 'a',
            documentation: obj.title,
            insertTextRules: 4,
            detail: obj.title,
            range,
          }))

            : getActions().map((obj, orderIdx) => ({
              label: `${aliasTable[obj.key as keyof typeof aliasTable] ?? obj.key}${needBrackets(obj) ? '(' : ''}${suggestionType === FUNC ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
                return `${v.field}:${v.dataType}`
              }).join(', ') : ''}${needBrackets(obj) ? ')' : ''}: ${obj.data.category}`,
              kind: suggestionType === FUNC ? monaco.languages.CompletionItemKind.Function : monaco.languages.CompletionItemKind.Property,
              insertText: `${aliasTable[obj.key as keyof typeof aliasTable] ?? obj.key}${needBrackets(obj) ? '(' : ''}${suggestionType === FUNC ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
                return `\${${idx + 1}:${v.field}}`
              }).join(', ') : ''}${needBrackets(obj) ? ')' : ''}`,
              // TODO: add documentation
              sortText: checkSuggestions(obj, inputProps, defaultReturnType),
              documentation: (obj as any).data.fragments.filter((v: any) => v.type === 'constant')[0]?.text,
              insertTextRules: 4,
              detail: obj.title,
              range,
            }))
        const extra: languages.CompletionItem[] = []
        if (extraSuggestions) {
          Object.keys(extraSuggestions)?.forEach((key) => {
            if (getFunctionProps(code, Math.max(0, cursorPos - 1)).functionName === key || key === defaultReturnType) {
              extraSuggestions[key].forEach((suggestion) => {
                suggestion.range = range
                extra.push(suggestion)
              })
            }
          })
        }

        return {
          incomplete: true,
          suggestions: extraSuggestions ? extra.concat(suggestions) : suggestions,
        }
      },
    }))
    // TODO: finish signatureHelp provider
    disposableRef.current.push(monaco.languages.registerSignatureHelpProvider(MODDIOSCRIPT, {
      signatureHelpTriggerCharacters: triggerCharactersWithNumber,
      provideSignatureHelp: async (model, position, token, context) => {
        let cursorPos = position.column - 1;
        const code = model.getLineContent(position.lineNumber);
        const functionProps = getFunctionProps(code, Math.max(0, cursorPos - 1))
        const targetAction = getActions().find((obj) => (aliasTable[obj.key as keyof typeof aliasTable] ?? obj.key) === functionProps.functionName)
        const targetFrag: any = targetAction?.data.fragments.filter((frag: any) => frag.type === 'variable')
        const signatures: languages.SignatureHelp['signatures'] = !targetAction || functionProps.functionName === 'undefined' ? [] :
          [
            {
              label: '',
              documentation: {
                value:
                  `${functionProps.functionName}(${targetFrag?.map((frag: any, idx: number) => (`${idx === functionProps.functionParametersOffset ? '**' : ''}${frag.field}: ${frag.extraData?.dataType || frag.dataType}${idx === functionProps.functionParametersOffset ? '**' : ''}`))})`,
              },

              parameters:
                targetFrag.map((frag: any) => ({
                  label: "",
                  documentation: frag.filed
                }))
            },
          ];

        return {
          dispose: () => { },
          value: {
            activeParameter: functionProps.functionParametersOffset,
            activeSignature: 0,
            signatures,
          },
        };
      }
    }))
  }

  useEffect(() => {
    if (monacoRef.current) {
      disposableRef.current.forEach((ref) => {
        ref.dispose()
      })
      init(monacoRef.current)
    }

  }, [defaultReturnType, extraSuggestions, rawJSON])

  useEffect(() => {
    editorRef?.current?.setValue(defaultValue)
  }, [rawJSON])

  useEffect(() => {
    return () => {
      disposableRef.current.forEach((ref) => {
        ref.dispose()
      })
    }
  }, [])

  return (
    <div style={{ display: 'flex', width: '100%' }}>

      <Editor
        language={MODDIOSCRIPT}
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        height={'100vh'}
        beforeMount={(monaco) => {
          monacoRef.current = monaco
          // Register a new language
          monaco.languages.register({ id: MODDIOSCRIPT })
          init(monaco)
        }}
        onMount={editor => {
          editorRef.current = editor
          editor.getModel()?.setEOL(0)

          editor.setValue(defaultValue)
          stringToAction(defaultValue)
          //@ts-ignore, the type define is wrong, editor have onDidType
          // editor.onDidType((v) => {
          //   editor.trigger('anything', 'editor.action.triggerParameterHints', () => { })
          // })

          // editor.onKeyDown(e => {
          //   if (e.code === "Enter") {
          //     editor.trigger('anything', 'acceptSelectedSuggestion', () => { })
          //   }
          // })

          // deal with user paste
          // see: https://github.com/microsoft/monaco-editor/issues/2009#issue-63987720
          editor.onDidPaste((e) => {
          })
        }}
        onChange={(v) => {
          stringToAction(v)
        }}
      />
      {debug && <Editor
        value={formatJSON(JSON.stringify(parseStr))}
        theme="vs-dark"
        language='JSON'
        height='100vh'
        width={'30%'}
        onChange={v => {
          try {
            editorRef.current?.setValue(actionToString({ o: JSON.parse(v || ''), defaultReturnType, parentKey: '', gameData: { unitTypes: {} } }))
          } catch (e) {

          }

        }} />}
      {/* {debug && (
        <div>
          <span style={{ backgroundColor: "orange" }}>output(raw json):</span>
          <pre>
            {JSON.stringify(parseStr, null, 2)}
          </pre>
          <span style={{ backgroundColor: "orange" }}>converted from raw json:</span>
          <pre>
            {convertedStr}
          </pre>
        </div>
      )} */}
    </div>
  )
}

export default TextScriptEditorMultiline