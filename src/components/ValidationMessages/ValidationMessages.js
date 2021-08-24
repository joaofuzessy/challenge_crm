
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './ValidationMessages.scss';

function ValidationMessages(props) {

    const {leadMatchesBase, haveOccurrences} = props;

    return(
        <div className="ValidationMessages">
            <p className={leadMatchesBase? "valid" : "invalid"}>
                {leadMatchesBase
                ?
                <>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                <span> Matches National Registry System</span>
                </>
                :
                <>
                <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                <span> Does not match or exist on the registry</span>
                </>
                }
            </p>
            <p className={!haveOccurrences? "valid" : "invalid"}>
                {!haveOccurrences
                ?
                <>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                <span> No judicial records were found</span>
                </>
                :
                <>
                <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
                <span> Judicial records were found</span>
                </>
                }
            </p>   
        </div>
    )
}

export default ValidationMessages;