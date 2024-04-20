import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
function InventHeader(){
    return(
        <div className="header-parent">
            <div className="header-info">
                <Link to={'/'}>
                    <h1>Հրավեր.am</h1>
                </Link>
                <a href=""><FontAwesomeIcon icon={faInstagram} style={{'color':'black', 'fontSize': '30px'}}/></a>
                <p>+374 99123456</p>
            </div>
        </div>
    )
}

export default InventHeader;