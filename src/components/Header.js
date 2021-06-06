import React from 'react';
import "./Header.css";
function Header () {

    return(
        <div className="navbar">
                <ul>
                <li className="Logo">DEMO Streaming</li>
                <ul className="left-header">
                <li style={{fontSize: "15px"}}>Log in</li>
                <li><button>Start your free trial</button></li>
                </ul>
                </ul>
        </div>
    )
}
export default Header;