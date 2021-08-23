import React, { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { getLeads } from '../../services/requests';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';

import './Leads.scss';

function Leads() {
    const [leadsList, setLeadsList] = useState([]);
    const [isloading, setIsLoading] = useState([true]);
    const [errorMessage, setErrorMeassage] = useState(['']);

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
                <div class="cardsWrapper">
                    <ul>
                        { 
                            leadsList.map((lead) => {
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
        const response = await getLeads();
        setLeadsList(response);
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="Leads">
            <h1 className="pageTitle">Leads</h1>
            {isloading? renderLoader() : renderCards()}
        </div>
    )
}

export default Leads;