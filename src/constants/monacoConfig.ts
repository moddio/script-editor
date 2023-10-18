import * as monaco from "monaco-editor-core";
import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;
import ILanguageConfiguration = monaco.languages.LanguageConfiguration

export const comment = /^\s*#([ =|].*)?$/

export const languageDef= <ILanguage>{
  defaultToken: "",
  number: /\d+(\.\d+)?/,
  keywords: [
    "@project",
    "@participants",
    "@summary",
    "@rounding",
  ],
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@tags" },
      [/^@\w+/, { cases: { "@keywords": "keyword" } }],
    ],
    whitespace: [
      [comment, "comment"],
      [/\s+/, "white"],
    ],
    numbers: [
      [/@number/, "number"],
    ],
    strings: [
      [/[=|][ @number]*$/, "string.escape"],
    ],
    tags: [
      [/^%[a-zA-Z]\w*/, "tag"],
      [/#[a-zA-Z]\w*/, "tag"],
    ],
  },
}

// This config defines the editor's behavior.
export const configuration = <ILanguageConfiguration>{
  comments: {
    lineComment: "#",
  },
  brackets: [
    ["{", "}"], ["[", "]"], ["(", ")"],
  ],
}