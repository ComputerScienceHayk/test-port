import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faFileExport, faBrain, faCogs, faMapMarked} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="navicon">
                    <div></div>
                </div>
                <FontAwesomeIcon icon="faCoffee"/>
                <a href="#main"><FontAwesomeIcon icon={faHome} style={{paddingRight: "5px"}}/>Home</a>
                <a href="#about"><FontAwesomeIcon icon={faUser} style={{paddingRight: "5px"}} />About</a>
                <a href="#experience"><FontAwesomeIcon icon={faUser} style={{paddingRight: "5px"}} />Experience</a>
                <a href="#portfolio"><FontAwesomeIcon icon={faFileExport} style={{paddingRight: "5px"}}/>Portfolio</a>
                <a href="#skills"><FontAwesomeIcon icon={faBrain} style={{paddingRight: "5px"}}/>Skills</a>
                <a href="#tools"><FontAwesomeIcon icon={faCogs} style={{paddingRight: "5px"}}/>Tools</a>
                <a href="#contact"><FontAwesomeIcon icon={faMapMarked} style={{paddingRight: "5px"}}/>Contact info</a>
            </nav>
        </div>
    )
}


export default Navbar