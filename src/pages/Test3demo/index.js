import useCustomStore from '../../hook/useCustomStore';

function Test3demo() {
    const {getValue} = useCustomStore();
    
    return(
        <>
            <h1 style={{color:"red"}}>{getValue("value1") || "None..."}</h1>
        </>
    );
}
export default Test3demo;