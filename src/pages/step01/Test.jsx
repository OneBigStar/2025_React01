
function NumberCount(props){
    let cnt = 5;
    let increment = () =>{
        cnt++;
        console.log("cnt: ", cnt);
    }
    return (
        <>
            {/* html처럼 보이는 jsx안에서 자바 스크립트 코드나 변수를 사용하려면 {} 넣어야한다. */} 
            {/* 1. 변수 출력 2. 연산식 3. 조건문 (삼항연산자) 4. 함수호출  */} 
            <button onClick={increment} 
            // 스타일은 반드시 {{}} 사용
            style={{margin:"0 20px", fontSize:"20px"}}> + </button> 
            <span> {cnt} </span>
             <button> - </button>
        </> 
    );
}

export default NumberCount;