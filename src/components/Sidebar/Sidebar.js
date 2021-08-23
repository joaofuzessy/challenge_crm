import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.scss';


function Sidebar() {
    return (
        <div className="Sidebar">
                <ul>
                    <li>
                        <NavLink to="/leads" activeClassName='active'>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span>Leads</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/prospects" activeClassName='active'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <span>Prospects</span>
                        </NavLink>
                    </li>
                </ul>              
        </div>
    );
}

export default Sidebar;