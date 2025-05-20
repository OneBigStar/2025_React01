import { useCallback, useState } from "react";
import Child from "./Child";

export default function UseCallBackEx(){
    const [count, setCount]= useState(0);
    // 자식 컴포넌트에 넘어가는 함수에 usecallaback 사용
    // 부모 컴포넌트가 랜더링해도 자식 컴포넌트는 랜더링하지 않음
    const handleClick= useCallback(()=> {
        console.log("클릭");
    },[])
    return (
        <div>
            <h2>useCallBack 사용</h2>\
            <p>카운트 : {count}</p>
            <button onClick={()=> setCount(count+1)}>부모카운트 증가</button>
            <Child onClick={handleClick} />
        </div>
    );
}