import type { Meta, StoryObj } from '@storybook/react';
import MultiEditorModal from 'components/MultiEditorModal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'MultiEditorModal',
  component: MultiEditorModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof MultiEditorModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Editor: Story = {
  args: {
    title: 'test',
    action: 'sendChatMessage',
    actionDesc: 'send chat message',
    contents: [
      {name: 'message', desc:'the message'}
    ]
  }
};
