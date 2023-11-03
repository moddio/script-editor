import TextScriptEditor from "../components/TextScriptEditor";

export const CombinedComp: React.FC<{}> = () => {
    return (
        <div>
            <TextScriptEditor debug={true}/>
            <TextScriptEditor debug={true} />
        </div>
    );
}