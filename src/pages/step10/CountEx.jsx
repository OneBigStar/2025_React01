import { Button } from "@mui/material";

export default function CountEx(){
    // 리액트에서 화면을 변경(랜더링)하기 위해서는 상태값이 변경 되었다고 알려준다. (상태관리 => useState)
    // use가 붙으면 '훅'이라 부름름
    let count= 5;
    function increment(){
        count+=1;
        console.log(count)
        return count;
    }
    
    function decrement(){
        count-=1;
        console.log(count)
        return count;
    }

    return(
        <>
            <Button variant="outlined" onClick={increment}> + </Button>
            <h2>Count : {count}</h2>
            <Button variant="outlined" onClick={decrement}> - </Button>
        </>
    );
}