export default function Comment(props){
    return(
        <>
            <ul>
                <li>이름 : {props.name}</li>
                <li>내용용 : {props.comment} </li>
            </ul>
        </>
    );
}