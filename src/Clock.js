import { useState } from "react";

function Clock(){
    let time = new Date().getSeconds();
    let [seconds, setSeconds]= useState(time);
    setInterval(()=>setSeconds(new Date().getSeconds()),1000)
    

    return(
        <div>
            <h1>{seconds}</h1>

        </div>
    )
};
export default Clock;