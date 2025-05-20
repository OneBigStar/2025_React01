
export default function Menu(){
    return (
        <nav className="nav">
            <ul>
                <li className="lineStyle">
                    <Link to="/first">홈홈</Link>
                </li>
                <li className="lineStyle">
                    <Link to="/second">첫번째</Link>
                </li>
                <li className="lineStyle">
                    <Link to="/thired">두번째</Link>
                </li>
                <li className="lineStyle">
                    <Link to="/fourth">세번째</Link>
                </li>
            </ul>
        </nav>
    )
}