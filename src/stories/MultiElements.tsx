import TextScriptEditor from "../components/TextScriptEditor";

interface CombinedCompProps {
    defaultReturnTypes: string[]
}

export const CombinedComp: React.FC<CombinedCompProps> = ({ defaultReturnTypes }) => {
    return (
        <div>
            {defaultReturnTypes.map((type, idx) => {
                return (
                    <TextScriptEditor idx={idx} defaultReturnType={type} debug={true} />
                )
            })}
        </div>
    );
}