import { useRef } from "react";

export default function RefEx02(){
    // 1. useRef 객체 생성
    const inputRef= useRef(null);

    const focusInput = () => {
        // 3. 지정한 inputRef에 포커스 넣기 
        console.log(inputRef.current.value.trim());
    }
    return (
        <div>
            <h3>useRef : DOM에 접근(포커스)</h3>
            {/* 2. 랜더링이 끝난 후 ref를 input 태그와 연결 */}
            <input ref={inputRef} type="text" placeholder="입력하세요" />
            <button onClick={focusInput}> 값 확인하기 </button>
        </div>
    );
}