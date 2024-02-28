import type { Meta, StoryObj } from '@storybook/react';

import TextScriptEditorMultiline from '../components/TextScriptEditorMultiline'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'TextScriptEditorMultiline',
  component: TextScriptEditorMultiline,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof TextScriptEditorMultiline>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Editor: Story = {
  args: {
    debug: true,
    idx: 0,
    defaultReturnType: 'unitType',
    onError: (e) => { console.log(e) },
    onSuccess: (str) => { console.log(str) },
    extraSuggestions: {
      unitType: [{
        label: "astronaut",
        kind: 1,
        insertTextRules: 4,
        insertText: "astronaut",
        detail: "astronaut",
        range: {
          startLineNumber: 0,
          endLineNumber: 0,
          startColumn: 0,
          endColumn: 0,
        },
        sortText: 'a'
      }]
    }
  }
};
