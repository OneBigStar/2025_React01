import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function EffectTest03(){
    const [count, setCount]= useState(5);
    const [count2, setCount2]= useState(5);
    const [text, setText]= useState('');
    
    console.log("컴포넌트 랜더링");
    useEffect(()=>{
        console.log("useEffect 실행");
    },[count])  ;  
    
    return(
        <div>
            <h2>useEffect 관리_Count : {count}</h2>
            <Button variant="outlined" onClick={()=> setCount(count + 1)}> + </Button>
            <h2>useEffect 관리안함_Count : {count2}</h2>
            <Button variant="outlined" onClick={()=> setCount2(count2 + 1)}> + </Button>

            <p>텍스트 입력 : {text}</p>
            <input type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />
        </div>
    );
}