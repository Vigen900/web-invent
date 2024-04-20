import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function InventHeader(){
    return(
        <div className="header-parent">
            <div className="header-info">
                <h1>Հրավեր.am</h1>
                <a href=""><FontAwesomeIcon icon={faInstagram} style={{'color':'black', 'fontSize': '30px'}}/></a>
                <p>+374 99123456</p>
            </div>
        </div>
    )
}

export default InventHeader;