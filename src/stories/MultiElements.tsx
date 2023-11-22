import TextScriptEditor from "../components/TextScriptEditor";

interface CombinedCompProps {
    defaultReturnTypes: string[]
}

export const CombinedComp: React.FC<CombinedCompProps> = ({ defaultReturnTypes }) => {
    return (
        <div>
            {defaultReturnTypes.map((type, idx) => {
                return (
                    <TextScriptEditor idx={idx} defaultReturnType={type} debug={true} extraSuggestions={[{
                        label: "as tronaut",
                        kind: 1,
                        insertTextRules: 4,
                        insertText: "as tronaut",
                        range: {
                            startLineNumber: 0,
                            endLineNumber: 0,
                            startColumn: 0,
                            endColumn: 0,
                        },
                        sortText: 'a',
                        detail: "9SDtGUOM4N",
                    }]} />
                )
            })}
        </div>
    );
}