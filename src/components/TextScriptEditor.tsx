import { Editor } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration, keywords } from '../constants/monacoConfig'
import React, { useState } from 'react'
import parser from 'script-parser'
import { languages } from 'monaco-editor-core'
import { ACTIONS } from '../constants/tmp'


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
        height="5rem"
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
                    label: obj.key,
                    kind: monaco.languages.CompletionItemKind.Function,
                    insertText: `${obj.key}(\${1:value})`,
                    documentation: {
                      value: "My Snippet"
                    },
                    insertTextRules: 4,
                    detail: obj.title,
                    range,
                  }))
                  return {
                    incomplete: true,
                    suggestions: [...suggestions],
                  }
                }
              })
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
          editor.onDidChangeCursorPosition((e) => {
            const position = e.position;
            const lineContent = editor.getModel()!.getLineContent(position.lineNumber);
            const openingBracketIndex = lineContent.lastIndexOf('(', position.column - 1);
            const closingBracketIndex = lineContent.indexOf(')', position.column);

            // Check if the cursor is not inside a pair of brackets
            if (openingBracketIndex === -1 || closingBracketIndex === -1 || closingBracketIndex < openingBracketIndex) {
              // Find the nearest pair of brackets and move the cursor inside
              const nearestOpeningBracketIndex = lineContent.lastIndexOf('(', position.column);
              const nearestClosingBracketIndex = lineContent.indexOf(')', position.column);

              if (nearestOpeningBracketIndex !== -1 && nearestClosingBracketIndex !== -1) {
                const line = position.lineNumber;
                const column = nearestOpeningBracketIndex + 1;

                // Set the new cursor position
                editor.setPosition({ lineNumber: line, column: column });
              }
            }
          });
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
