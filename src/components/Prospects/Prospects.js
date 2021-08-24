import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import './Prospects.scss';

function Prospects() {
    const prospectsList = useSelector(state => state.prospectsList);
    const [filteredList, setFilteredList] = useState([]);
    //const [errorMessage, setErrorMeassage] = useState(['']);

    const filterProspects = (prospects) => {
        setFilteredList(prospects);
    }

    const renderEmptyMessage = () =>{
        return(
            <h4>
                <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                <span> Lead does not exist or does not match filter criteria.</span>
            </h4>
        )
    }

    const renderCards = (filtered) => {
            return(
                <div className="cardsWrapper">
                    <SearchBar allData={prospectsList} filterLeads={filterProspects}></SearchBar>
                    <ul>
                        { 
                            filtered.length
                            ?filtered.map((lead) => {
                                return(
                                    <li key={uuid()}>
                                        <Card lead={lead} hasFooter={false} hasHeaderButton={false} type={'prospects'}></Card>
                                    </li>
                                );
                            })
                            :renderEmptyMessage()
                        }
                    </ul>
                </div>
            )
    }
      useEffect(() => {
        setFilteredList(prospectsList);
      }, [prospectsList])

    return (
        <div className="Prospects">
            <div className="pageTitleWrapper"><h1 className="pageTitle">Prospects</h1></div>
            {renderCards(filteredList)}
        </div>
    )
}

export default Prospects;