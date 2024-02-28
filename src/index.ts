import { aliasTable, actionToString } from "script-parser"
import { removeUnusedProperties } from "./utils/obj"
import TextScriptEditor from "./components/TextScriptEditor"
import TextScriptEditorMultiline from './components/TextScriptEditorMultiline'


// eslint-disable-next-line import/no-anonymous-default-export
export { TextScriptEditor, aliasTable, removeUnusedProperties, actionToString, TextScriptEditorMultiline }