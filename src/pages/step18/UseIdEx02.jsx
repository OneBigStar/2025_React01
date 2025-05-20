import { useId, useRef } from "react";

export default function UseIdEx02(){
    const id= useId();
    const nameRef= useRef();
    const ageRef= useRef();
    

    const handleKeyDown= (e, type)=>{
        if(e.key === 'Enter'){
            if(type === 'name'){
                alert(`이름 : ${nameRef.current.value}`)
            }else if(type === 'age'){
                alert(`나이 : ${ageRef.current.value}`)
            }
        }
    }

    return(
        <div>
           <label htmlFor="">이름</label>
           <input type="text"
                    ref={nameRef}
                    onKeyDown={(e)=>handleKeyDown(e,"name") }
                    placeholder="이름을 입력하세요"
           />
           <label htmlFor="">나이</label>
           <input type="number"
                    ref={ageRef}
                    onKeyDown={(e)=>handleKeyDown(e,"age")}
                    placeholder="나이을 입력하세요" 
           />
        </div>
    );

}