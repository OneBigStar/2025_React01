import { useEffect, useState } from "react";

export default function EffectTest04(){
    const [data,setData]= useState([]);
    const [error,setError]= useState(null);

   useEffect(()=>{
        // 서버 API를 호출
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((response)=>{
            if(!response.ok){
                throw new Error("네트워크 오류");
            }
            return response.json(); // 응답 데이터를 json형태로 변환
        })
        .then((data)=> {
            // console.log(data);
            return setData(data.slice(0,3))} )
        .catch((error)=> setError(error.message));
    },[]);
    return(
        <div>
           <ul>
                {data.map((k)=> (
                    <li key={k.id}>
                        <h3>이름 : {k.name}</h3>
                        <p>가격 : {k.price}</p>
                        <img src={k.image_link} alt="" width="100px"/>
                    </li>
                ))}
           </ul>
        </div>
    );
}