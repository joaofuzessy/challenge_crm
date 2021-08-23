import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './Footer.scss';

function Footer() {
    return (
        <div className="Footer">
            <div>
                <FontAwesomeIcon icon={faQuestionCircle} />
                <span> Request Support</span>
            </div>
        </div>
    )
}

export default Footer;