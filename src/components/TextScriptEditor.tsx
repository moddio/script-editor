import { Editor } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration, keywords } from '../constants/monacoConfig'
import React, { useState } from 'react'
import parser from 'script-parser'
import { Position, languages } from 'monaco-editor-core'
import { ACTIONS } from '../constants/tmp'
import { isCompositeComponent } from 'react-dom/test-utils'


interface TextScriptEditorProps {
  debug: boolean
}

const triggerCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.\\@".split("");

const TextScriptEditor: React.FC<TextScriptEditorProps> = ({ debug = false }) => {
  const [parseStr, setParseStr] = useState('')
  return (
    <>
      <Editor
        language={MODDIOSCRIPT}
        height="2rem"
        options={{
          renderLineHighlight: "none",
          quickSuggestions: true,
          glyphMargin: false,
          lineDecorationsWidth: 0,
          folding: false,
          fixedOverflowWidgets: false,
          acceptSuggestionOnEnter: "on",
          hover: {
            delay: 100,
          },
          roundedSelection: false,
          contextmenu: false,
          cursorStyle: "line-thin",
          occurrencesHighlight: false,
          links: false,
          minimap: { enabled: false },
          // see: https://github.com/microsoft/monaco-editor/issues/1746
          wordBasedSuggestions: true,
          // disable `Find`
          find: {
            addExtraSpaceOnTop: false,
            autoFindInSelection: "never",
            seedSearchStringFromSelection: "never",
          },
          fontSize: 14,
          fontWeight: "normal",
          wordWrap: "off",
          lineNumbers: "off",
          lineNumbersMinChars: 0,
          overviewRulerLanes: 0,
          overviewRulerBorder: false,
          hideCursorInOverviewRuler: true,
          scrollBeyondLastColumn: 0,
          scrollbar: {
            horizontal: "hidden",
            vertical: "hidden",
            // avoid can not scroll page when hover monaco
            alwaysConsumeMouseWheel: false,
          },
        }}

        beforeMount={(monaco) => {
          if (!monaco.languages.getLanguages().some(({ id }) => id === MODDIOSCRIPT)) {
            // Register a new language
            monaco.languages.register({ id: MODDIOSCRIPT })
            monaco.languages.onLanguage(MODDIOSCRIPT, () => {
              // Register a tokens provider for the language
              monaco.languages.setMonarchTokensProvider(MODDIOSCRIPT, languageDef)
              // Set the editing configuration for the language
              monaco.languages.setLanguageConfiguration(MODDIOSCRIPT, configuration)
              monaco.languages.registerCompletionItemProvider(MODDIOSCRIPT, {
                triggerCharacters,
                provideCompletionItems: (model, position, context) => {
                  let word = model.getWordUntilPosition(position);
                  let range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn,
                  };
                  const suggestions: languages.CompletionItem[] = ACTIONS.map(obj => ({
                    label: `${obj.key}(${obj.data.fragments.filter(v => v.type === 'variable').map((v, idx) => {
                      return `${v.field}:${v.dataType}`
                    }).join(', ')})`,
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: `${obj.key}(${obj.data.fragments.filter(v => v.type === 'variable').map((v, idx) => {
                      return `\${${idx + 1}:${v.field}}`
                    }).join(', ')})`,
                    documentation: 'hello',
                    insertTextRules: 4,
                    detail: obj.title,
                    range,
                  }))
                  return {
                    incomplete: true,
                    suggestions: [...suggestions],
                  }
                },
              })
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
              monaco.languages.registerSignatureHelpProvider(MODDIOSCRIPT, {
                signatureHelpTriggerCharacters: ['('],
                signatureHelpRetriggerCharacters: [','],
                provideSignatureHelp: async (model, position, token, context) => {
                  let word = model.getWordAtPosition(position)
                  console.log(model.getValue())
                  console.log(word)
                  const signatures = [];

                  return {
                    dispose: () => { },
                    value: {
                      activeParameter: 0,
                      activeSignature: 0,
                      signatures: [
                        {
                          label:
                            "sendChatMessage(message $string)",
                          documentation:
                            'send chat message to all players',
                          parameters: [
                            {
                              label: "message $string",
                              documentation:
                                "something u want to send to all players",
                            },
                          ],
                        },
                      ],
                    },
                  };
                }
              });
            })
          }
        }}
        onMount={editor => {
          editor.focus()
          editor.onDidChangeCursorPosition((e) => {
            // Monaco tells us the line number after cursor position changed
            if (e.position.lineNumber > 1) {
              // Trim editor value
              editor.setValue(editor.getValue().trim());
              // Bring back the cursor to the end of the first line
              editor.setPosition({
                ...e.position,
                // Setting column to Infinity would mean the end of the line
                column: Infinity,
                lineNumber: 1,
              });
            }
          })
        }}
        onChange={(v) => {
          try {
            setParseStr(parser.parse(v || ''))
          } catch (e: any) {
            
            setParseStr(e)
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
