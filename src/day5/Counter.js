import { useState } from "react";

function Counter(){
    let [count, setCount]=useState(0);
    function addOne(){
        setCount(count+1);
    }
    function substractOne(){
        setCount(count-1);
    }

    return (
        <>
            <h1 style={{color:"royalblue"}}>
               {count}
            </h1>
            <br/>
            <br/>
            <button onClick={addOne}>Add 1</button>
            <button onClick={substractOne}>Substract 1 1</button>
        </>
    )
};
export default Counter;