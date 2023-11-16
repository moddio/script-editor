import { Editor, Monaco } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration, KEYWORDS, OPTIONS } from '../constants/monacoConfig'
import React, { useEffect, useRef, useState } from 'react'
import { IDisposable, Position, editor, languages } from 'monaco-editor'
import { ACTIONS } from '../constants/tmp'
import { isCompositeComponent } from 'react-dom/test-utils'
import { aliasTable, parser } from 'script-parser'
import { checkSuggestions, checkIsFunction, checkIsWrappedInQuotes, checkTypeIsValid, findFunctionPos, getActions, getInputProps, getFunctionProps } from '../utils/actions'

export interface TextScriptErrorProps {
  hash: {
    text: string,
    token: string,
    line: number,
    loc: {
      first_line: number,
      last_line: number,
      first_column: number,
      last_column: number
    },
    expected: string[],
    recoverable: boolean
  }
}
interface TextScriptEditorProps {
  debug: boolean,
  idx: number,
  defaultValue?: string,
  defaultReturnType?: string,
  onError?: ({ e, output }: { e: string[], output: string | undefined }) => void,
  onSuccess?: (parserOutput: string | undefined) => void,
}

const triggerCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.\\@".split("");
const triggerCharactersWithNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.\\@1234567890-+*/".split("");

export interface FunctionProps {
  functionName: string,
  functionParametersOffset: number
}

const TextScriptEditor: React.FC<TextScriptEditorProps> = ({ idx, defaultReturnType, onSuccess, onError, debug = false, defaultValue = '' }) => {
  const [parseStr, setParseStr] = useState('')
  const editorRef = useRef<editor.IStandaloneCodeEditor | undefined>(undefined);
  const monacoRef = useRef<Monaco | undefined>(undefined)
  const disposableRef = useRef<IDisposable[]>([])

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
        const isFunction = checkIsFunction(code, cursorPos - 1)
        const inputProps = getInputProps(getFunctionProps(code, cursorPos - 1))
        const suggestions: languages.CompletionItem[] = checkIsWrappedInQuotes(code, cursorPos - 1) ? [] :
          getActions().map((obj, orderIdx) => ({
            label: `${aliasTable[obj.key] ?? obj.key}${isFunction ? '(' : ''}${isFunction ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
              return `${v.field}:${v.dataType}`
            }).join(', ') : ''}${isFunction ? ')' : ''}: ${obj.data.category}`,
            kind: isFunction ? monaco.languages.CompletionItemKind.Function : monaco.languages.CompletionItemKind.Property,
            insertText: `${aliasTable[obj.key] ?? obj.key}${isFunction ? '(' : ''}${isFunction ? obj.data.fragments.filter((v: any) => v.type === 'variable').map((v: any, idx: number) => {
              return `\${${idx + 1}:${v.field}}`
            }).join(', ') : ''}${isFunction ? ')' : ''}`,
            // TODO: add documentation
            sortText: checkSuggestions(obj, inputProps, defaultReturnType),
            documentation: (obj as any).data.fragments.filter((v: any) => v.type === 'constant')[0]?.text,
            insertTextRules: 4,
            detail: obj.title,
            range,
          }))
        return {
          incomplete: true,
          suggestions,
        }
      },
    }))
    // TODO: finish hover provider
    // monaco.languages.registerHoverProvider(MODDIOSCRIPT, {
    //   provideHover: (model, position, token) => {
    //     const { column, lineNumber } = position;

    //     const word = model.getWordAtPosition(position)?.word
    //     const contents = model.getLineContent(lineNumber)
    //     console.log(model, position, token, word, contents)
    //     return {
    //       value: 'hello?' || '',
    //       isTrusted: true,
    //       supportThemeIcons: true,
    //       contents: [{
    //         value: 'hello!',
    //       }]
    //     }
    //   }
    // })
    // TODO: finish signatureHelp provider
    disposableRef.current.push(monaco.languages.registerSignatureHelpProvider(MODDIOSCRIPT + idx, {
      signatureHelpTriggerCharacters: triggerCharactersWithNumber,
      provideSignatureHelp: async (model, position, token, context) => {
        const code = model.getValue();
        let cursorPos = model.getOffsetAt(position);
        const functionProps = getFunctionProps(code, cursorPos - 1)
        const targetAction = getActions().find((obj) => (aliasTable[obj.key] ?? obj.key) === functionProps.functionName)
        const targetFrag: any = targetAction?.data.fragments.filter((frag: any) => frag.type === 'variable')
        const signatures: languages.SignatureHelp['signatures'] = !targetAction ? [] :
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
      disposableRef.current.map((ref) => {
        ref.dispose()
      })
      init(monacoRef.current)
    }

  }, [defaultReturnType])

  useEffect(() => {
    return () => {
      disposableRef.current.map((ref) => {
        ref.dispose()
      })
    }
  }, [])

  return (
    <>
      <Editor
        language={MODDIOSCRIPT + idx}
        height="1.5rem"
        theme="vs-dark"
        options={OPTIONS}
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

          // editor.focus()
          editor.setValue(defaultValue)
          //@ts-ignore, the type define is wrong, editor have onDidType
          editor.onDidType((v) => {
            editor.trigger('anything', 'editor.action.triggerParameterHints', () => { })
          })
          editor.onDidChangeCursorPosition((e) => {
            // Monaco tells us the line number after cursor position changed
            if (e.position.lineNumber > 1) {
              const updatedValue = editor.getValue().trim().replace(/\n/g, ' ')
              editor.setValue(updatedValue);
              // Bring back the cursor to the end of the first line
              editor.setPosition({
                ...e.position,
                // Setting column to Infinity would mean the end of the line
                column: Infinity,
                lineNumber: 1,
              });
            }
          })
          editor.onDidFocusEditorText(() => {
            editor.trigger('anything', 'editor.action.triggerSuggest', () => { })
            editor.trigger('anything', 'editor.action.triggerParameterHints', () => { })
          })
        }}
        onChange={(v) => {
          if (v === '') {
            onSuccess?.(undefined)
            setParseStr('')
            monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
          } else {
            try {
              const output = parser.parse(v || '')
              setParseStr(output)
              monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [])
              if (typeof output === 'object') {
                const errors = checkTypeIsValid(v || '', output, defaultReturnType)
                if (errors.length === 0) {
                  onSuccess?.(output)
                } else {
                  onError?.({ e: errors.map((error) => error.message), output })
                  monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', errors)
                }
              } else {
                if (typeof output !== defaultReturnType) {
                  const message = `expect ${defaultReturnType} here, but got ${typeof output}`
                  onError?.({ e: [message], output: undefined })
                  monacoRef.current!.editor.setModelMarkers(editorRef.current!.getModel()!, 'owner', [{
                    message,
                    severity: 8,
                    startLineNumber: 0,
                    startColumn: 0,
                    endLineNumber: 0,
                    endColumn: v?.length || 0,
                  }])
                } else {
                  onSuccess?.(output)
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
                    const message = `expect ${errorHash.expected.join(', ')} here, but got ${errorHash.token}`
                    onError?.({ e: [message], output: undefined })
                    markers.push({
                      message,
                      severity: monaco.MarkerSeverity.Error,
                      startLineNumber: errorHash.loc.first_line,
                      startColumn: errorHash.loc.first_column,
                      endLineNumber: errorHash.loc.last_line,
                      endColumn: errorHash.loc.last_column,
                    });
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
        }}
      />
      {debug && (
        <div>
          <pre>
            {JSON.stringify(parseStr, null, 2)}
          </pre>
        </div>
      )}
    </>
  )
}

export default TextScriptEditor