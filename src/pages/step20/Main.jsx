import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Main(){
    const {isDark}= useContext(ThemeContext);
    return (
        <div
            className="content"
            style={{backgroundColor: isDark ? 'black' : 'lightgray',
                    color: isDark ? 'white' : 'black'
            }}
        >
            <p>props 를 사용한 예제제</p>
            <p>홍길동님, 좋은 하루 되세요</p>
        </div>
    );
}