// children은 React 컴포넌트의 특수한 props.
// 시작 태그와 끝태그 사이의 글자를 말한다.
function AlertButton({message, children}){
    return (
        <button onClick={()=>{alert(message)}}>{children}</button>
    );
}


export default function Event02(){
    return (
        <div>
            <AlertButton message="play">PlayButton</AlertButton><br />
            <AlertButton message="update">UpdateButton</AlertButton><br />
            <AlertButton message="download">DownloadButton</AlertButton><br />
        </div>
    );
}