import { useState } from "react";

function createInitTodos(){
    const initTodos= [];
    for(let i=0; i<12; i++){
       // initTodos+= i => 상수라서 변경 불가
       initTodos.push({id:i , text: 'Item'+ (i+1)}) // 배열에 값넣기 -push
    }
    return initTodos;
}

export default function CountEx4(){
    const [todos, setTodos]= useState(createInitTodos);
    const [text, setText]= useState('');
    return(
        <div>
            <hr/>
            <input value={text} onChange={e=>setText(e.target.value)} />
            <button onClick={()=>{
                setText('');
                setTodos([ ...todos,{
                    id: todos.length,
                    text: text
                }])
            }} >add</button>
            <ul>
                {todos.map(k => (
                    <li key={k.id}>{k.text}</li>
                ))}
            </ul>
        </div>
    );
}