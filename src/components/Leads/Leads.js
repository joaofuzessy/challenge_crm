import React, { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { getLeads } from '../../services/requests';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import './Leads.scss';

function Leads() {
    const [leadsList, setLeadsList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isloading, setIsLoading] = useState([true]);
    const [errorMessage, setErrorMeassage] = useState(['']);


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

    const renderCards = useCallback((filtered) => {
            return(
                <div className="cardsWrapper">
                    <SearchBar allData={leadsList} filterLeads={filterLeads}></SearchBar>
                    <ul>
                        { 
                            filtered.map((lead) => {
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
    }, [leadsList])

    const loadData = async() => {
        setIsLoading(true);
        const response = await getLeads();
        setLeadsList(response);
        setFilteredList(response);
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="Leads">
            <div className="pageTitleWrapper"><h1 className="pageTitle">Leads</h1></div>
            {isloading? renderLoader() : renderCards(filteredList)}
        </div>
    )
}

export default Leads;