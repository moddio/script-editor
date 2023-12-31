import type { Meta, StoryObj } from '@storybook/react';

import TextScriptEditor from '../../components/TextScriptEditor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'examples/HelloWorld',
  component: TextScriptEditor,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof TextScriptEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Editor: Story = {
  args: {
    debug: true,
    idx: 0,
    defaultValue: "sendChatMessage('hello world!')",
    onError: (e) => { console.log(e) },
    onSuccess: (str) => { console.log(str) },
  }
};
