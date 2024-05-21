import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import './invent-header.css';
function InventHeader(){
    return(
        <div className="header-parent">
                <Link to={'/'}>
                    <h1>InventYou.am</h1>
                </Link>
                <a className="faInstagram" href=""><FontAwesomeIcon icon={faInstagram} style={{'color':'black', 'fontSize': '30px'}}/></a>
                <p>+374 99123456</p>
        </div>
    )
}

export default InventHeader;