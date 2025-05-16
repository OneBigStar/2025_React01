import ItemList from "./Items"

export default function FindAdminComent2(){
    const comments =[
        {name:"홍길동", comment:"방가 방가", isAdmin:true}, 
        {name:"임꺽정", comment: "하이~~~", isAdmin:true},
        {name: "장길산", comment:"헬로~~~",isAdmin:true}, 
        {name:"일지매", comment:"안녕하세요",isAdmin:true}

    ];
    // find() - 조건에 맞는 항목 추출 (조건을 만족하는 맨처음 항목 추출출)
    // 조건을 만족하지 않는 경우를 생각해서 삼항 연산자를 사용한다.
    // 조건식 ? 참 일대 거짓 일때.
    const admin = comments.find(k=>k.isAdmin);
    return(
        <>
            <h2>관리자 리스트</h2>
            {comments
            .find(k=>k.isAdmin)
            ? (<ItemList name={admin.name} coment = {admin.coment}/>)
            : (<p>관지라 댓글 없음</p>)
            }
        </>
    );
}