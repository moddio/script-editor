import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Editor } from '@monaco-editor/react';
import { MODDIOSCRIPT } from '../constants/string';
import { languageDef, configuration, KEYWORDS } from '../constants/monacoConfig';
import { useRef, useState } from 'react';
import { ACTIONS } from '../constants/tmp';
import parser from 'script-parser';
const triggerCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.\\@".split("");
const triggerCharactersWithNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.\\@1234567890-+*/".split("");
const searchChars = ['"', "'", ")"];
const getInputProps = (functionProps) => {
    const targetAction = ACTIONS.find((obj) => obj.key === functionProps.functionName);
    if (targetAction) {
        const targetFrag = targetAction.data.fragments.filter((frag) => frag.type === 'variable')[functionProps.functionParametersOffset];
        if (targetFrag && targetFrag.extraData) {
            return targetFrag.extraData.dataType;
        }
        else {
            return targetFrag.dataType;
        }
    }
    return '';
};
const getFunctionProps = (s, cursorPos) => {
    let output = {
        functionName: "",
        functionParametersOffset: 0
    };
    let offset = 0;
    let searchChar = '';
    for (let i = cursorPos; i >= 0; i--) {
        if (searchChar !== '') {
            if (s[i] === searchChar) {
                searchChar = '';
            }
            continue;
        }
        if (searchChars.includes(s[i])) {
            searchChar = s[i];
            if (s[i] === ')') {
                searchChar = '(';
            }
            continue;
        }
        if (KEYWORDS.includes(output.functionName)) {
            if (offset === 0) {
                return output;
            }
            else {
                offset -= 1;
            }
        }
        if (/^[a-zA-Z]+$/.test(s[i])) {
            output.functionName = s[i] + output.functionName;
        }
        else {
            if (s[i] === ',') {
                output.functionParametersOffset += 1;
                offset += 1;
            }
            else {
                output.functionName = '';
            }
        }
    }
    return output;
};
const TextScriptEditor = ({ onChange, onError, debug = false, defaultValue = '' }) => {
    const [parseStr, setParseStr] = useState('');
    const editorRef = useRef(undefined);
    const monacoRef = useRef(undefined);
    return (_jsxs(_Fragment, { children: [_jsx(Editor, { language: MODDIOSCRIPT, height: "1.5rem", theme: "vs-dark", options: {
                    automaticLayout: true,
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
                    fontSize: 16,
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
                }, beforeMount: (monaco) => {
                    if (!monaco.languages.getLanguages().some(({ id }) => id === MODDIOSCRIPT)) {
                        monacoRef.current = monaco;
                        // Register a new language
                        monaco.languages.register({ id: MODDIOSCRIPT });
                        monaco.languages.onLanguage(MODDIOSCRIPT, () => {
                            // Register a tokens provider for the language
                            monaco.languages.setMonarchTokensProvider(MODDIOSCRIPT, languageDef);
                            // Set the editing configuration for the language
                            monaco.languages.setLanguageConfiguration(MODDIOSCRIPT, configuration);
                            monaco.languages.registerCompletionItemProvider(MODDIOSCRIPT, {
                                triggerCharacters,
                                provideCompletionItems: (model, position, context, token) => {
                                    let word = model.getWordUntilPosition(position);
                                    let words = model.getWordAtPosition(position);
                                    let range = {
                                        startLineNumber: position.lineNumber,
                                        endLineNumber: position.lineNumber,
                                        startColumn: word.startColumn,
                                        endColumn: word.endColumn,
                                    };
                                    let cursorPos = model.getOffsetAt(position);
                                    const code = model.getValue();
                                    const inputProps = getInputProps(getFunctionProps(code, cursorPos - 1));
                                    const suggestions = ACTIONS.filter((obj) => obj.data.category === inputProps || inputProps === '').map(obj => ({
                                        label: `${obj.key}(${obj.data.fragments.filter(v => v.type === 'variable').map((v, idx) => {
                                            return `${v.field}:${v.dataType}`;
                                        }).join(', ')}): ${obj.data.category}`,
                                        kind: monaco.languages.CompletionItemKind.Function,
                                        insertText: `${obj.key}(${obj.data.fragments.filter(v => v.type === 'variable').map((v, idx) => {
                                            return `\${${idx + 1}:${v.field}}`;
                                        }).join(', ')})`,
                                        // TODO: add documentation
                                        documentation: '',
                                        insertTextRules: 4,
                                        detail: obj.title,
                                        range,
                                    }));
                                    return {
                                        incomplete: true,
                                        suggestions: [...suggestions],
                                    };
                                },
                            });
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
                            monaco.languages.registerSignatureHelpProvider(MODDIOSCRIPT, {
                                signatureHelpTriggerCharacters: triggerCharactersWithNumber,
                                provideSignatureHelp: async (model, position, token, context) => {
                                    const code = model.getValue();
                                    let cursorPos = model.getOffsetAt(position);
                                    const functionProps = getFunctionProps(code, cursorPos - 1);
                                    const inputProps = getInputProps(functionProps);
                                    const targetAction = ACTIONS.find((obj) => obj.key === functionProps.functionName);
                                    const targetFrag = targetAction?.data.fragments.filter((frag) => frag.type === 'variable');
                                    const signatures = !targetAction ? [] :
                                        [
                                            {
                                                label: '',
                                                documentation: {
                                                    value: `${functionProps.functionName}(${targetFrag?.map((frag, idx) => (`${idx === functionProps.functionParametersOffset ? '**' : ''}${frag.field}: ${frag.extraData?.dataType || frag.dataType}${idx === functionProps.functionParametersOffset ? '**' : ''}`))})`,
                                                },
                                                parameters: targetFrag.map((frag) => ({
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
                            });
                        });
                    }
                }, onMount: editor => {
                    editorRef.current = editor;
                    // detect tab click
                    editor.onKeyDown((e) => {
                        console.log("keydown outside", e.keyCode);
                        if (e.keyCode === 2) {
                            console.log('tab');
                            // e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                    // editor.focus()
                    editor.setValue(defaultValue);
                    editor.onDidChangeCursorPosition((e) => {
                        // Monaco tells us the line number after cursor position changed
                        if (e.position.lineNumber > 1) {
                            const updatedValue = editor.getValue().trim().replace(/\n/g, ' ');
                            editor.setValue(updatedValue);
                            // Bring back the cursor to the end of the first line
                            editor.setPosition({
                                ...e.position,
                                // Setting column to Infinity would mean the end of the line
                                column: Infinity,
                                lineNumber: 1,
                            });
                        }
                    });
                }, onChange: (v) => {
                    try {
                        const output = parser.parse(v || '');
                        setParseStr(output);
                        onChange?.(output);
                        monacoRef.current.editor.setModelMarkers(editorRef.current.getModel(), 'owner', []);
                    }
                    catch (e) {
                        const error = e;
                        onError?.(e);
                        setParseStr(e);
                        if (v === '') {
                            onChange?.(undefined);
                        }
                        if (editorRef.current && monacoRef.current) {
                            const monaco = monacoRef.current;
                            const editor = editorRef.current;
                            const model = editor.getModel();
                            if (model) {
                                const markers = [];
                                markers.push({
                                    message: `expect ${error.hash.expected.join(', ')} here, but got ${error.hash.token}`,
                                    severity: monaco.MarkerSeverity.Error,
                                    startLineNumber: error.hash.loc.first_line,
                                    startColumn: error.hash.loc.first_column,
                                    endLineNumber: error.hash.loc.last_line,
                                    endColumn: error.hash.loc.last_column,
                                });
                                monaco.editor.setModelMarkers(model, 'owner', markers);
                            }
                        }
                    }
                } }), debug && (_jsx("div", { children: _jsx("pre", { children: JSON.stringify(parseStr, null, 2) }) }))] }));
};
export default TextScriptEditor;
