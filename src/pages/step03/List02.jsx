import Item02 from "./Item02";

function List02(props){
    return(
        <>
            <div>
                <h3>강의 목록 2 </h3>
                <Item02 title="HTML&CSS 입문" content="웹 개발에 필요한 기본 지식을 배웁니다."/>
                <Item02 title="SPRING BOOT 입문" content="Springboot에 필요한 기본 지식을 배웁니다."/>
                <Item02 title="REACT 입문" content="REACT에 필요한 기본 지식을 배웁니다."/>
            </div>
        </>
    );
}
export default List02;