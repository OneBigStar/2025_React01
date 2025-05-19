import { Button } from "@mui/material";
import { useState } from "react";

export default function CountEx2(){
    // 리액트에서 화면을 변경(랜더링)하기 위해서는 상태값이 변경 되었다고 알려준다. (상태관리 => useState)
    // use가 붙으면 '훅'이라 부름
   
    //    [변수이름, setter]= useState(초기값)
    const [count, setCount]= useState(5);
    const increment = ()=> setCount(count + 1);
    const decrement = ()=> setCount(count - 1);
    
    return(
        <>
            <Button variant="outlined" onClick={increment}> + </Button>
            <h2>Count : {count}</h2>
            <Button variant="outlined" onClick={decrement}> - </Button>
            <br/>
        </>
    );
}