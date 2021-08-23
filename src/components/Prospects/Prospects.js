import React, { useCallback, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { getProspects } from '../../services/requests';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';

import './Prospects.scss';

function Prospects() {
    const [prospectsList, setProspectsList] = useState([]);
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
                            prospectsList.map((lead) => {
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
    }, [prospectsList])

    const loadData = async() => {
        const response = await getProspects();
        setProspectsList(response);
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="Prospects">
            <h1 className="pageTitle">Prospects</h1>
            {isloading? renderLoader() : renderCards()}
        </div>
    )
}

export default Prospects;