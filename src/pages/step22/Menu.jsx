import { Link } from 'react-router-dom'
import './Menu.css'

// 라우터란 URL(주소 경로)을 기준으로 어떤 컴포넌트를 화면에 보여줄지를 결정해주는 역할을 한다.
// 1. 설치 : 

export default function Menu(){
    return (
        <nav className="nav">
            <ul>
                <li className="lineStyle">
                    {/* <a href='/'>HOME</a> */}
                    <Link to="/">홈홈</Link>
                </li>
                <li className="lineStyle">
                    {/* <a href='/first'>FIRST</a> */}
                    <Link to="/first">첫번째째</Link>
                </li>
                <li className="lineStyle">
                    {/* <a href='/second'>SECOND</a> */}
                    <Link to="/second">두번째째</Link>
                </li>
            </ul>
        </nav>
    )
}