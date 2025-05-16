import { Button } from "@mui/material";

// 선언식
export default function Event03(){
    function handleClick(){
        console.log("event1");
    }
    return (
        <>
            <Button variant="text" onClick={handleClick}>버튼</Button>
            <Button variant="contained" onClick={()=>{console.log("event2")}}>버튼</Button>
            <Button variant="outlined">버튼</Button>
        </>
    );
}