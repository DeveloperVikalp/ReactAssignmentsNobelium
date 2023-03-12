import { useState } from "react";

function Clock(){
    let time = new Date().getSeconds();
    let [seconds, setSeconds]= useState(time);
    setInterval(()=>setSeconds(new Date().getSeconds()),1000)
    

    return(
        <div>
           
            <p>Seconds:{seconds}</p>

        </div>
    )
};
export default Clock;