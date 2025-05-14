// ㅐ그안에서 인자 호출 : <li> `문자열 ${}` </li>
// 인자의 이름은 파라미터의 이름과 같아야 한다.
function Item02({title,content}){
    return (
        <ul> 
            <li> 과목 : {title} </li>
            <li> {`과목 : ${title}`} </li>
            <li> 내용 : {content} </li>
        </ul>
    );
}
export default Item02;