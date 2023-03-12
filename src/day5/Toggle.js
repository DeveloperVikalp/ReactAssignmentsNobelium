import { useState } from "react";

export default function Toggle(){
    let [toggleState, setToggleState] = useState(true);
    
    function toggle(){
        setToggleState(!toggleState);

    }
    
    return (
        <>
            <h1>The name is :{toggleState?"Amit":"Ranjan"}</h1>
           
            <button onClick={toggle}>Change </button>
        </>
    )
}