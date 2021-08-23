
import React from 'react';
import Button from '../Button/Button';
import './Card.scss';

function Card(props) {
    const {lead, hasFooter=false} = props;

    const renderFooter = () => {
        return(
            <div className="cardFooter">
                <Button text={'Run Query'}></Button>
                <Button text={'Get Score'}></Button>
            </div>
        )
    }
    return (
        <div class="Card">
            <div className="cardBody">
                <h3>{lead.firstName} {lead.lastName}</h3>
                <p><span className="bold">Document:</span> {lead._id}</p>
                <p><span className="bold">Birth Date:</span> {lead.birthDate}</p>
                <p><span className="bold">Gender:</span> {lead.gender}</p>
                <p><span className="bold">Email:</span> {lead.email}</p>
                <p><span className="bold">Address:</span> {lead.address}</p>                
            </div>
            {hasFooter && renderFooter()}
            
        </div>
    )
}

export default Card;