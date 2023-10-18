import { Editor } from '@monaco-editor/react'
import { MODDIOSCRIPT } from '../constants/string'
import { languageDef, configuration } from '../constants/monacoConfig'
import React from 'react'


interface TextScriptEditorProps {

}

const TextScriptEditor:React.FC<TextScriptEditorProps> = () => {
  return (
    <Editor
      language={MODDIOSCRIPT}
      height="10rem"
      beforeMount={(monaco)=>{
        if (!monaco.languages.getLanguages().some(({ id }) => id === MODDIOSCRIPT)) {
          // Register a new language
          monaco.languages.register({ id: MODDIOSCRIPT })
          // Register a tokens provider for the language
          monaco.languages.setMonarchTokensProvider(MODDIOSCRIPT, languageDef)
          // Set the editing configuration for the language
          monaco.languages.setLanguageConfiguration(MODDIOSCRIPT, configuration)
        }
      }}
      onMount={editor => { editor.focus() }}
    />
  )
}

export default TextScriptEditor
