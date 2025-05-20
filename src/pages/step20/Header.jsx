import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header(){

    const {isDark}= useContext(ThemeContext);

    return(
        <header
            className="header"
            style={{backgroundColor: isDark ? 'black' : 'lightgray',
                    color: isDark ? 'white' : 'black'
            }}
        > 

            <h2>한국 ICT 인재 개발원</h2>
        </header>
    );
}