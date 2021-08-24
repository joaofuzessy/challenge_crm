
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTag } from '@fortawesome/free-solid-svg-icons'
import ValidationMessages from '../ValidationMessages/ValidationMessages';
import Button from '../Button/Button';
import { checkNationalBase, checkOcurrences } from '../../services/requests';
import * as LeadListActions from '../../services/leadsSlice';
import * as ProspectsListActions from '../../app/actions/prospectsActions';
import ReactTooltip from 'react-tooltip';
import './Card.scss';

function Card(props) {
    const {lead, hasFooter, hasHeaderButton} = props;
    const [leadMatchesBase, setLeadMatchesBase] = useState(false);
    const [haveOccurrences, setHaveOccurrences] = useState(false);
    const [leadScore, setLeadScore] = useState(0);
    const [performedValidation, setPerformedValidation] = useState(false);
    const dispatch = useDispatch();

    const handleRunChecks = async() =>{
        const isMatch = await checkNationalBase(lead);
        setLeadMatchesBase(isMatch);
        const ocurrences = await checkOcurrences(lead._id);
        setHaveOccurrences(ocurrences);
        setPerformedValidation(true);
    }

    const handleAddProspect = () => {
        dispatch(ProspectsListActions.addToProspectsList(lead));
        dispatch(LeadListActions.removeFromLeadsList(lead));
    }

    const getScore = () =>{
        setLeadScore(Math.floor(Math.random() * 100));
    }

    const renderFooter = () => {
        return(
            <div className="cardFooter">
                <div>
                    <Button text={'Run Query'} clickAction={handleRunChecks} ></Button>
                </div>
                <div>
                    <Button text={'Get Score'} clickAction={getScore} disabled={!leadMatchesBase || haveOccurrences}></Button>
                </div>
            </div>
        )
    }
    
    return (
        <div className="Card">
            <div className="cardBody">
                <div className="cardHeader">
                    <div><h3>{lead.firstName} {lead.lastName}</h3></div>
                    <div data-tip={leadScore <= 60 ? "The lead must have a higher score" : "Add to prospects"}>
                        {hasHeaderButton &&
                            <Button disabled={leadScore<=60} isIconOnly={true} clickAction={handleAddProspect}>
                                <FontAwesomeIcon icon={faUserTag}></FontAwesomeIcon>
                            </Button>
                        }
                    </div>
                    <ReactTooltip />
                </div>
                <p className={`score ${leadScore > 60 && "eligible"}`}><span className={`bold`}>Score:</span> {leadScore? leadScore : "No score yet"}</p>
                <p><span className="bold">Document:</span> {lead._id}</p>
                <p><span className="bold">Birth Date:</span> {lead.birthDate}</p>
                <p><span className="bold">Gender:</span> {lead.gender}</p>
                <p><span className="bold">Email:</span> {lead.email}</p>
                <p><span className="bold">Address:</span> {lead.address}</p>
                {performedValidation && 
                <ValidationMessages haveOccurrences={haveOccurrences} leadMatchesBase={leadMatchesBase}></ValidationMessages>
                }       
            </div>
            {hasFooter && renderFooter()}
            
        </div>
    )
}

export default Card;