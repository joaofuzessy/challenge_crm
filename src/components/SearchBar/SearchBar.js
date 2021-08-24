import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.scss';

function SearchBar(props) {
    const { allData, filterLeads } = props;

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
            return data._id.search(value) !== -1;
        });

        if(value){
            filterLeads(result);
        }
        else{
            filterLeads(allData);
        }
    }

    return (
        <div className="SearchBar">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            <input type= "text" placeholder="Search by document number" onChange={(event) => handleSearch(event)}></input>
        </div>
    )
}

export default SearchBar;