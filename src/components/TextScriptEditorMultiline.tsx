import { Editor, Monaco } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration, OPTIONS, FUNC } from '../constants/monacoConfig'
import React, { useEffect, useRef, useState } from 'react'
import { IDisposable, editor, languages } from 'monaco-editor'
import { aliasTable, parser, actionToString, noBracketsFuncs } from 'script-parser'
import { checkSuggestions, getSuggestionType, checkIsWrappedInQuotes, checkTypeIsValid, findFunctionPos, getActions, getInputProps, getFunctionProps, postProcessOutput } from '../utils/actions'
import { findString } from '../utils/string'
import { ExtraDataProps, TextScriptErrorProps, triggerCharacters, triggerCharactersWithNumber } from './TextScriptEditor'

interface TextScriptEditorMultilineProps {
  debug: boolean,
  idx: number,
  defaultValue?: string,
  defaultReturnType?: string,
  extraSuggestions?: Record<string, languages.CompletionItem[]>,
  extraData?: ExtraDataProps,
  onError?: ({ e, output }: { e: string[], output: string | undefined }) => void,
  onSuccess?: (parserOutput: string | undefined) => void,
}

const TextScriptEditor: React.FC<TextScriptEditorMultilineProps> = ({ idx, onSuccess, onError, extraData, extraSuggestions, debug = false, defaultValue = '', defaultReturnType = '' }) => {
  const [parseStr, setParseStr] = useState<string | object>('')
  const [convertedStr, setConvertedStr] = useState('')
  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
  const monacoRef = useRef<Monaco | undefined>(undefined)
  const disposableRef = useRef<IDisposable[]>([])
  const stringToAction = (v?: string) => {
    if (v === '') {
      onSuccess?.(undefined)
      setParseStr('')
      setConvertedStr('')
      monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
    } else {
      try {
        let value = v
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
        const output = parser.parse(value || '')
        const processedOutput = typeof output === 'object' ? postProcessOutput(output, extraData) : output
        setParseStr(processedOutput)
        // TODO: add gameData
        setConvertedStr(actionToString({
          o: processedOutput, parentKey: '', defaultReturnType: defaultReturnType || '', gameData: { unitTypes: {} }
        }))
        monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
        if (typeof output === 'object') {
          const errors = checkTypeIsValid(value || '', output, defaultReturnType)
          if (errors.length === 0) {
            onSuccess?.(processedOutput)
          } else {
            onError?.({ e: errors.map((error) => error.message), output: processedOutput })
            monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', errors)
          }
        } else {
          if (defaultReturnType !== undefined && defaultReturnType !== '' && typeof output !== defaultReturnType && !(typeof output === 'string' && defaultReturnType?.includes('Type'))
            && !(typeof output === 'string' && defaultReturnType === 'script')
          ) {
            const message = `expect ${defaultReturnType} here, but got ${typeof output}`
            onError?.({ e: [message], output: undefined })
            monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [{
              message,
              severity: 8,
              startLineNumber: 0,
              startColumn: 0,
              endLineNumber: 0,
              endColumn: value?.length || 0,
            }])
          } else {
            onSuccess?.(processedOutput)
            monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
          }
        }
      } catch (e: any) {
        const error: TextScriptErrorProps | Error = e
        setParseStr(e)
        if (editorRef.current && monacoRef.current) {
          const monaco = monacoRef.current
          const editor = editorRef.current
          const model = editor.getModel()
          if (model) {
            const markers: editor.IMarkerData[] = []
            const errorHash = (error as TextScriptErrorProps).hash
            if (errorHash) {
              if (errorHash.expected) {
                const message = `expect ${errorHash.expected?.join(', ')} here, but got ${errorHash.token}`
                onError?.({ e: [message], output: undefined })
                markers.push({
                  message,
                  severity: monaco.MarkerSeverity.Error,
                  startLineNumber: errorHash.loc.first_line,
                  startColumn: errorHash.loc.first_column,
                  endLineNumber: errorHash.loc.last_line,
                  endColumn: errorHash.loc.last_column,
                });
              }
            } else {
              const code = model.getValue();
              const undefinedName = code.replace(' is undefined', '')
              const { startColumn, endColumn } = findFunctionPos(code, undefinedName)
              onError?.({ e: [e.message as string], output: undefined })
              markers.push({
                message: e.message as string,
                severity: monaco.MarkerSeverity.Error,
                startLineNumber: 0,
                startColumn,
                endLineNumber: 0,
                endColumn,
              }
              )
            }
            monaco.editor.setModelMarkers(model, 'owner', markers)
          }
        }
      }
    }
  }

  const init = (monaco: Monaco) => {
    // Register a tokens provider for the language
    disposableRef.current.push(monaco.languages.setMonarchTokensProvider(MODDIOSCRIPT + idx, languageDef))
    // Set the editing configuration for the language
    disposableRef.current.push(monaco.languages.setLanguageConfiguration(MODDIOSCRIPT + idx, configuration))
    disposableRef.current.push(monaco.languages.registerCompletionItemProvider(MODDIOSCRIPT + idx, {
      triggerCharacters,
      provideCompletionItems: (model, position, context, token) => {
        let word = model.getWordUntilPosition(position);
        let range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };
        let cursorPos = model.getOffsetAt(position);
        const code = model.getValue();
        const suggestionType = getSuggestionType(code, Math.max(0, cursorPos - 1))
        const needBrackets = (obj: any) => suggestionType === FUNC && !noBracketsFuncs.includes(obj.key)
        const inputProps = getInputProps(getFunctionProps(code, Math.max(0, cursorPos - 1)))
        const suggestions: languages.CompletionItem[] = checkIsWrappedInQuotes(code, Math.max(0, cursorPos - 1)) ? [] :
          getActions().map((obj, orderIdx) => ({
            label: `${aliasTable[obj.key] ?? obj.key}${needBrackets(obj) ? '(' : ''}${suggestionType === FUNC ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
              return `${v.field}:${v.dataType}`
            }).join(', ') : ''}${needBrackets(obj) ? ')' : ''}: ${obj.data.category}`,
            kind: suggestionType === FUNC ? monaco.languages.CompletionItemKind.Function : monaco.languages.CompletionItemKind.Property,
            insertText: `${aliasTable[obj.key] ?? obj.key}${needBrackets(obj) ? '(' : ''}${suggestionType === FUNC ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
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
    disposableRef.current.push(monaco.languages.registerSignatureHelpProvider(MODDIOSCRIPT + idx, {
      signatureHelpTriggerCharacters: triggerCharactersWithNumber,
      provideSignatureHelp: async (model, position, token, context) => {
        const code = model.getValue();
        let cursorPos = model.getOffsetAt(position);
        const functionProps = getFunctionProps(code, Math.max(0, cursorPos - 1))
        const targetAction = getActions().find((obj) => (aliasTable[obj.key] ?? obj.key) === functionProps.functionName)
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

  }, [defaultReturnType, extraSuggestions])

  useEffect(() => {
    return () => {
      disposableRef.current.forEach((ref) => {
        ref.dispose()
      })
    }
  }, [])

  return (
    <>
      {debug && <textarea
        placeholder='place ur script raw json here'
        style={{ width: '100%', height: 200}}
        onChange={e => {
          try {
            editorRef.current?.setValue(actionToString({ o: JSON.parse(e.currentTarget.value), defaultReturnType, parentKey: '', gameData: { unitTypes: {} } }))
          } catch (e) {

          }

        }}></textarea>}
      <Editor
        language={MODDIOSCRIPT + idx}
        theme="vs-dark"
        options={{}}
        height={'100vh'}
        beforeMount={(monaco) => {
          monacoRef.current = monaco
          // Register a new language
          monaco.languages.register({ id: MODDIOSCRIPT + idx })
          init(monaco)
        }}
        onMount={editor => {
          editorRef.current = editor

          // detect tab click
          editor.onKeyDown((e) => {
            if (e.keyCode === 2) {
              e.stopPropagation();
            }
          });

          editor.setValue(defaultValue)
          stringToAction(defaultValue)
          //@ts-ignore, the type define is wrong, editor have onDidType
          editor.onDidType((v) => {
            editor.trigger('anything', 'editor.action.triggerParameterHints', () => { })
          })

          editor.onKeyDown(e => {
            if (e.code === "Enter") {
              editor.trigger('anything', 'acceptSelectedSuggestion', () => { })
            }
          })

          // deal with user paste
          // see: https://github.com/microsoft/monaco-editor/issues/2009#issue-63987720
          editor.onDidPaste((e) => {
          })
        }}
        onChange={(v) => {
          stringToAction(v)
        }}
      />
      {debug && (
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
      )}
    </>
  )
}

export default TextScriptEditor