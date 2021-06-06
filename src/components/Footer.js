import React from 'react';
import "./Footer.css";
import st1 from "../images/st1.jpg";
import st2 from "../images/st2.jpg";
import st3 from "../images/st3.png";
function Footer () {

    return(
        <div className="footer">
            <br/>
            <footer className="footermenu">
            <ul>
                <li>Home | </li>
                <li> Terms and Conditions |</li>
                <li> Privacy Policy | </li>
                <li> Collection Statement | </li>
                <li> Help | </li>
                <li> Manage Account</li>
            </ul>
            <p className="copy">Copyright &#169; 2021 DEMO Streaming All Rights Reserved</p>
            </footer>
            <footer className="social">
            <ul className="icons">
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
                <li><i className="fa fa-instagram"></i></li>
            </ul>
            <ul className="stores">
                <li><img src={st1} alt="" /></li>
                <li><img src={st2} alt="" /></li>
                <li><img src={st3} alt="" /></li>
            </ul>
            </footer>
        </div>
    )
}
export default Footer;