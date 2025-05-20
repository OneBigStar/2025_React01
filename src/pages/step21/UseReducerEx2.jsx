import { useReducer, useState } from "react";



function reducer(state, action){
    switch(action.type){
        case "depo" : return state + action.payload;
        case "withd" : return state - action.payload;
        default : return state;
    }
}

export default function UseReducerEx2(){
    const [number, setNumber]= useState(0);
    const [money, dispatch]= useReducer(reducer, 0);
    return (
        <div>
            <h2>ICT 은행에 오신 것을 환영합니다.</h2>
            <p> 잔고 : {money}</p>
            <input type="number"
                value={number}
                onChange={(e)=> {
                    const value= parseInt(e.target.value) || 0;
                    setNumber(value < 0 ? 0 : value);
                }}
                step="1000"
            />

            <button onClick={()=> {
                dispatch({type:'depo', payload: number})
                setNumber(0);
            }}>
                예금
            </button>

            <button onClick={()=> {
                if(number>money){
                    alert("잔고부족")
                }else{
                    dispatch({type:'withd', payload: number})
                }
                setNumber(0);
            }}>
                출금
            </button>
        </div>
    )
}