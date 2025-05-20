import { useRef, useState } from "react";

export default function RefEx04(){
    console.log("Ref 랜더링");
    const [render, setRender]= useState(0);
    const countRef= useRef(0);

    let countVar= 0;
    
    const refPlus= ()=>{
        countRef.current= countRef.current +1 ;
        console.log("ref : " + countRef.current);
    }
    const varPlus= ()=>{  
        countVar += 1;
        console.log("var : "+ countVar);
    }

    const doRender = ()=>{
        setRender(render+1);
    }
    

    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>var : {countVar}</p>

            <button onClick={refPlus}>Ref 올려</button>
            <button onClick={varPlus}>var 올려</button>
            <button onClick={doRender}>랜더링</button>
        </div>
    );
}