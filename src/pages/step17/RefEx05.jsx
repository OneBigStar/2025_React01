import { useEffect, useRef } from "react";

export default function RefEx05(){
    const inputRef= useRef(null);
    useEffect(()=> {
        inputRef.current.focus();
    },[])
    
    const handleCheckName= ()=>{
        const inputValue= inputRef.current.value;
        alert(`${inputValue}님 환영합니다.`)
        inputRef.current.value="";
        inputRef.current.focus();
    }

    const handleKeyDown= (e)=>{ // 이벤트 객체에서 뭔가를 꺼낼때는 e 필요요
        if(e.key === 'Enter'){
            handleCheckName();
        }
    }


    return (
        <div>
            <input type="text"
                    placeholder="userName"
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
            />
            <button onClick={handleCheckName}>이름 확인</button>
        </div>
    );
}