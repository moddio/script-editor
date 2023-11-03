import { CombinedComp } from './MultiElements';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Multi',
    component: CombinedComp,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Editor = {
    args: {
        debug: true,
        onError: () => { },
        onChange: (str) => { console.log(str); }
    }
};
