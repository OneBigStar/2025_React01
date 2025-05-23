import { Button } from "@mui/material";
import { useState } from "react";

export default function CountEx5(){
    const [isPinned, setPinned]= useState(false);
    const togglePinned = () => {
        setPinned(!isPinned)
    }

    return(
        <div>
            <Button variant="outlined" onClick={togglePinned}>
                체크유무 {isPinned && 'v'}
            </Button>
        </div>
    );
}