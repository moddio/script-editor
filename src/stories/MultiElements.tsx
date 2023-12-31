import TextScriptEditor from "../components/TextScriptEditor";

interface CombinedCompProps {
    defaultReturnTypes: string[]
}

export const CombinedComp: React.FC<CombinedCompProps> = ({ defaultReturnTypes }) => {
    return (
        <div>
            {defaultReturnTypes.map((type, idx) => {
                return (
                    <TextScriptEditor idx={idx} defaultReturnType={type} debug={true}
                        extraData={{ thisEntity: [{ dataType: 'unitType', key: `testVar${idx}`, entity:"E1KEji34" }] }}
                        extraSuggestions={{
                            thisEntity: [{
                                label: `testVar${idx}`,
                                kind: 1,
                                insertTextRules: 0,
                                insertText: `testVar${idx}`,
                                range: {
                                    startLineNumber: 0,
                                    endLineNumber: 0,
                                    startColumn: 0,
                                    endColumn: 0,
                                },
                                sortText: 'a',
                                detail: "testVar",
                            }, 
                            {
                                label: `$testAttr${idx}`,
                                kind: 1,
                                insertTextRules: 0,
                                insertText: `$testAttr${idx}`,
                                range: {
                                    startLineNumber: 0,
                                    endLineNumber: 0,
                                    startColumn: 0,
                                    endColumn: 0,
                                },
                                sortText: 'a',
                                detail: "testAttr",
                            }],
                            unitType: [{
                                label: "as tronaut",
                                kind: 1,
                                insertTextRules: 0,
                                insertText: "as tronaut",
                                range: {
                                    startLineNumber: 0,
                                    endLineNumber: 0,
                                    startColumn: 0,
                                    endColumn: 0,
                                },
                                sortText: 'a',
                                detail: "9SDtGUOM4N",
                            }],
                            script: [
                                {
                                    label: "worldScript1",
                                    kind: 1,
                                    insertTextRules: 0,
                                    insertText: "worldScript1",
                                    range: {
                                        startLineNumber: 0,
                                        endLineNumber: 0,
                                        startColumn: 0,
                                        endColumn: 0,
                                    },
                                    sortText: 'a',
                                    detail: "BigWo48cLr",
                                }
                            ]
                        }} />
                )
            })}
        </div>
    );
}