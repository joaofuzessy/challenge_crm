import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';
import Card from '../Card/Card';

import './Prospects.scss';

function Prospects() {
    const prospectsList = useSelector(state => state.leads.prospectsList);

    
    const renderEmptyMessage = () =>{
        return(
            <h4>
                <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                <span> There are no prospects registered at the moment.</span>
            </h4>
        )
    }

    const renderCards = useCallback(() => {
            return(
                <div className="cardsWrapper">
                    <ul>
                        { 
                            prospectsList.length
                            ?prospectsList.map((lead) => {
                                return(
                                    <li key={uuid()}>
                                        <Card lead={lead} hasFooter={false}></Card>
                                    </li>
                                );
                            })
                            :renderEmptyMessage()
                        }
                    </ul>
                </div>
            )
    }, [prospectsList])

    return (
        <div className="Prospects">
            <h1 className="pageTitle">Prospects</h1>
            {renderCards()}
        </div>
    )
}

export default Prospects;