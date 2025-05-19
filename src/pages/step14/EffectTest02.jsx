import { useEffect, useState } from "react";

// useEffect 는 리액트에서 제공하는 훅 중 하나로
// 함수형 컴포넌트에서 사이드 이팩트를 처리할 수 있도록 도와준다.
// 사이드 이팩트란 컴포넌트의 랜더링 외의 작업 (** 서버에서 데이터 가져오기, DOM 수정등)을 의미 한다.

// useEffect는 상태변경으로 발생한 랜더링(useState) 이후에 실행된다.
// 의존성 배열을 통해 특정 상태나 속성의 변화에만 반응하도록 제한할 수 있다.
// 의존성 배열이 없으면 갱신할 때 마다 호출
// 의존성 배열이 [](빈 배열) 이면, 처음 한번 호출하고 다시 호출 X
// 형식)
// useEffect(()=>{
//      실행할 작업
//      return ; - 화살표 함수 생략가능
// },[의존성 배열1, 의존성 배열2, ..]);
export default function EffectTest02(){
    const [count, setCount]= useState(0);

    /* 최초 한번만 실행 (빈 배열 사용)
    useEffect(()=>{
        document.title= `총 ${count}번 출력했습니다.`;
    },[]);
    */

    /* 매번 실행
    useEffect(()=>{
        document.title= `총 ${count}번 출력했습니다.`;
    },);
    */

    // count가 변경되면 (재랜더링) useEffect를 실행하게 하자
    useEffect(()=>{
        document.title= `총 ${count}번 출력했습니다.`;
    },[count]);
    return (
        <div>
            <p>총 {count}번 출력했습니다.</p>
            <button onClick={()=> setCount(count+1)}>눌러주세요</button>
        </div>
    );
}