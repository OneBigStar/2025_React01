export default function Event01(){
    // 사용자 정의 함수 (이벤트 핸들러)
    function handlerClick(){
        alert("버튼1 클릭");
    }
    return(
        <>
        {/* 자바 스크립트 함수 호출 (이벤트 핸들러 호출) */}
            <button onClick={handlerClick}>버튼1</button><br/>
        {/* 자바 스크립트 함수 생생성 */}
            <button onClick={function handlerClick2(){alert("버튼2 클릭");}}>버튼2</button><br/>
            <button onClick={()=>{
                alert("버튼3 클릭");
            }}>버튼3</button><br/>
 
        </>
    );
}