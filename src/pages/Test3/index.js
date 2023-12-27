import { useNavigate } from "react-router-dom";

import useCustomStore from "../../hook/useCustomStore";

function Test3() {
    const {setValue}  = useCustomStore();
    const navigate = useNavigate();

    return(
        <>
            <button onClick = {() => {setValue("value1" , "asdfasdfasdf"); navigate("/test3demo");}}>Click me to go Test3demo Page.</button>
        </>
    );
}
export default Test3;