const axios = require('axios');

//APIS
const API_NATIONAL_REGISTRY_URL = "https://my-json-server.typicode.com/joaofuzessy/fakedbnationalregistry";


//Functions
export const getLeads = async (id=0) => {
        const leads = await axios.get(id? `${API_NATIONAL_REGISTRY_URL}/citizens?_id=${id}` : `${API_NATIONAL_REGISTRY_URL}/citizens`)
        return leads.data;
}

export const getProspects= async (id=0) => {
    const leads = await axios.get(id? `${API_NATIONAL_REGISTRY_URL}/citizens?_id=${id}` : `${API_NATIONAL_REGISTRY_URL}/citizens`)
    return leads.data;
}