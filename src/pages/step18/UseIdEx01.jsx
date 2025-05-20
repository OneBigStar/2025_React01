
// useId는 클라이언트와 서버 랜더링 환경에서 고유한 ID를 생성
// 이 ID는 컴포넌트 간 중복되지 않으며, 접근성을 위해 label과 input 쌍을 연결할 때 사용

import { useEffect, useId, useRef } from "react";

// 형식) const id= useId();
export default function UseIdEx01(){
    const id= useId();
    const age= useId();
    const nameRef= useRef(null);
    const ageRef= useRef(null);
    useEffect(()=> {
        // 가져올 수 없음
        // const element= document.querySelector("#id");
        // console.log(element);

        // useRef로 가져올 수 있음
        const element= nameRef.current;
        const element2= ageRef.current;
        console.log(element);
        console.log(element2);
    },[])
    return(
        <div>
            {/* 하나일때
            <label htmlFor={id}>이름</label>
            <input id={id} ref={inputRef} />
             */}

            <label htmlFor={`${id}-name`}>이름 : </label>
            <input id={`${id}-name`} ref={nameRef}/>
            
            <label htmlFor={`${age}-age`}>나이 : </label>
            <input id={`${age}-age`} ref={ageRef}/>
        </div>
    );

}