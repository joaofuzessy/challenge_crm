const axios = require('axios');
const _= require('lodash');

//APIS
const API_NATIONAL_REGISTRY_URL = "https://my-json-server.typicode.com/joaofuzessy/fakedbnationalregistry";


//Functions
export const getLeads = async (id=0) => {
    try{
        const leads = await axios.get(id? `${API_NATIONAL_REGISTRY_URL}/leads?_id=${id}` : `${API_NATIONAL_REGISTRY_URL}/leads`)
        return leads.data;
    }catch(error){
        Promise.reject(error);
    }
}

export const getProspects = () => {
    return JSON.parse(window.localStorage.getItem('state'))['prospectsList']['prospectsList'];
}

export const checkNationalBase = async (lead) => {
    try{
        const citizen = await axios.get(`${API_NATIONAL_REGISTRY_URL}/citizens?_id=${lead._id}`);
        const itMatches = _.isEqual(citizen.data[0], lead);
        return itMatches;
    }catch(error){
        Promise.reject(error);
    }
}

export const checkOcurrences = async (leadId) => {
    try{
        const statusOnJustice = await axios.get(`${API_NATIONAL_REGISTRY_URL}/ocurrences?_id=${leadId}`);
        return statusOnJustice.occurences;
    }catch(error){
        Promise.reject(error);
    }
}