import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import loadleads from '../../services/leadsSlice';
import './Leads.scss';

function Leads() {
    const leadsList = useSelector(state => state.leads.leadsList);
    const status = useSelector(state => state.leads.status);
    const [filteredList, setFilteredList] = useState([]);
    //const [errorMessage, setErrorMeassage] = useState(['']);
    const dispatch = useDispatch();

    const filterLeads = (leads) => {
        setFilteredList(leads);
    }

    const renderLoader = () => {
        return(
            <div className="loaderWrapper">
                <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                />
            </div>
        )
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
                    <SearchBar allData={leadsList} filterLeads={filterLeads}></SearchBar>
                    <ul>
                        { 
                            filtered.length
                            ?filtered.map((lead) => {
                                return(
                                    <li key={uuid()}>
                                        <Card lead={lead} hasFooter={true} hasHeaderButton={true}></Card>
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
        if (status === 'idle') {
          dispatch(loadleads());
        }
      }, [status, dispatch]);

      useEffect(() => {
        setFilteredList(leadsList);
      }, [leadsList])

    return (
        <div className="Leads">
            <div className="pageTitleWrapper"><h1 className="pageTitle">Leads</h1></div>
            {status === 'loading'? renderLoader() : renderCards(filteredList)}
        </div>
    )
}

export default Leads;