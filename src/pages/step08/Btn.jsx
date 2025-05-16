import { Button } from "@mui/material";

/* 선언식
export default function Btn({name}){
    return (
        <Button variant="contained"
        onClick={()=>{console.log(name)}}>{name}
        </Button>
    );
}
*/

/* 표현식 - {} 는 return이 있어야함. 보통 여러줄일때 사용
const Btn= ({name}) => {
    return <Button variant="contained"
             onClick={()=>{console.log(name)}}>{name +"!!"}
           </Button>
};
*/

/* () 사용 시, return 생략 보통 한줄에만 적합
const Btn= ({name}) => (
    <Button variant="contained"
        onClick={()=>{console.log(name)}}>{name +"&&"}
    </Button>
);
*/

/*
const Btn= ({name}) => (
    <Button variant="contained"
        onMouseEnter={()=>{console.log(name, "onMouseEnter")}}
        onMouseLeave={()=>{console.log(name, "onMouseLeave")}}
        onMouseOver={()=>{console.log(name, "onMouseOver")}}
        onMouseOut={()=>{console.log(name, "onMouseOut")}}
    >{name}
    </Button>
);
*/

const handleEvent= (name, e) => (
    console.log(name, e)
);

// e : 이벤트 객체를 뜻한다.
const Btn = ({name})=>(
    <Button variant="contained" 
        onClick={(e)=>handleEvent(name, e)}>{name}</Button>
);



export default Btn;
