import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./ThemeContext";

export default function ContextTest(){
    const [isDark, setIsDark]= useState(false);
    return(
        <div>
            {/* 하위 컴포넌트들에게 데이터를 제공한다는 뜻 */}
            <ThemeContext.Provider value={{isDark,setIsDark}}>
                <Page />
            </ThemeContext.Provider>
        </div>
    );

}