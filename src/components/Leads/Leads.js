import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { getLeads } from '../../services/requests';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import loadleads from '../../services/leadsSlice';
import './Leads.scss';
import { filter } from 'minimatch';

function Leads() {
    const leadsList = useSelector(state => state.leads.leadsList);
    const status = useSelector(state => state.leads.status);
    const [filteredList, setFilteredList] = useState(leadsList);
    const [errorMessage, setErrorMeassage] = useState(['']);
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

    const renderCards = useCallback(() => {
            return(
                <div className="cardsWrapper">
                    <SearchBar allData={leadsList} filterLeads={filterLeads}></SearchBar>
                    <ul>
                        { 
                            filteredList.map((lead) => {
                                return(
                                    <li key={uuid()}>
                                        <Card lead={lead} hasFooter={true}></Card>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            )
    }, [leadsList, filteredList])

    useEffect(() => {
        if (status === 'idle') {
          dispatch(loadleads());
        }
      }, [status, dispatch]);

    return (
        <div className="Leads">
            <div className="pageTitleWrapper"><h1 className="pageTitle">Leads</h1></div>
            {status === 'loading'? renderLoader() : renderCards()}
        </div>
    )
}

export default Leads;