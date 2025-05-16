/*
export default function IfExam02(props){
    let name = props.name ;
    let result ;
    if (props.isPacked) {
        result = <li>{name} + 체크 O </li>
    } else {
        result = <li>{name} + 체크 X </li>
    }

    return (
        <>
          {result}
        </>
    );
}
*/
/*
export default function IfExam02({name, isPacked}){
    let result ;
    if (isPacked) {
        result = <li>{name} + 체크 O </li>
    } else {
        result = <li>{name} + 체크 X </li>
    }

    return (
        <>
          {result}
        </>
    );
}
*/

// null 이 리턴 되면 아무것도 반환하지 않는다.
/*
export default function IfExam02({name, isPacked}){
   
    if (isPacked) {
      return  <li>{name} + 체크 O </li>
    } else {
      return null;
    }
}
*/

/*
export default function IfExam02({name, isPacked}){
    if (isPacked) {
      return  <li>{name} + 체크 O </li>
    } 
}
*/

// && 연산 (AND 연산)
// && 기준으로 왼쪽이 true   이면 오른쪽이 반환 된다.

export default function IfExam02({name, isPacked}){
    const chk = ""
    return(
        <li> {name} {chk && "체크 O" }</li>
    ) 
}


// || 연산 (OR 연산)
// || 기준으로  왼쪽이 true 이면 왼쪽 반환된다.
// || 기준으로  왼쪽이 false 이면 오늘쪽 반환된다.
/*
export default function IfExam02({name, isPacked}){
    return(
        <li> {name} {isPacked || "체크 O" }</li>
    ) 
}
    */
