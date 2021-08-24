import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';
import Loader from 'react-loader-spinner';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import loadprospects from '../../services/prospectsSlice';
import './Prospects.scss';

function Prospects() {
    const prospectsList = useSelector(state => state.prospectsList.prospectsList);
    const status = useSelector(state => state.prospectsList.status);
    const [filteredList, setFilteredList] = useState([]);
    //const [errorMessage, setErrorMeassage] = useState(['']);
    const dispatch = useDispatch();

    const filterProspects = (prospects) => {
        setFilteredList(prospects);
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
                    <SearchBar allData={prospectsList} filterProspects={filterProspects}></SearchBar>
                    <ul>
                        { 
                            filtered.length
                            ?filtered.map((lead) => {
                                return(
                                    <li key={uuid()}>
                                        <Card lead={lead} hasFooter={false} hasHeaderButton={false}></Card>
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
          dispatch(loadprospects());
        }
      }, [status, dispatch]);

      useEffect(() => {
        setFilteredList(prospectsList);
      }, [prospectsList])

    return (
        <div className="Prospects">
            <div className="pageTitleWrapper"><h1 className="pageTitle">Prospects</h1></div>
            {status === 'loading'? renderLoader() : renderCards(filteredList)}
        </div>
    )
}

export default Prospects;