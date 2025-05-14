import Comment from "./Comment";

// 배열 => 나중에는 DB
const comments = [
    {name:"홍길동", comment:"방가방가"},
    {name:"임꺽정", comment:"ㅎㅇㅎㅇ"},
    {name:"장길산", comment:"HEEEYYY"},
    {name:"일지매", comment:"999999"}
];

export default function CommentList(props){
    return(
        <>
             <h2>Map 예제</h2>
            {
                comments.map((k)=>{
                    return(
                        <Comment name={k.name} comment={k.comment}/>
                        )
                })
            }
        </>
    );
}