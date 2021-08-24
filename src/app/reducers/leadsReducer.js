import { createReducer } from '@reduxjs/toolkit';
import {
 addToProspectsList,
 removeFromLeadsList
} from '../actions/leadsActions';

const leadsList = createReducer([], {
 [addToProspectsList]: (state, action) => {
   const { payload } = action;
   const { _id } = payload;
 
   const leadExists = state.prospectsList.find(prospect => prospect._id === _id);
  
   if (!leadExists) {
     const prospectsList = {...state.prospectsList}.push(payload);
     return []
   }
 },
 [removeFromLeadsList]: (state, action) => {
  const leadIndex = state.leads.leadsList.findIndex(lead=> lead._id === action.payload._id);

  if (leadIndex >= 0) {
   return state.leads.leadsList.slice(0, leadIndex).concat(state.leads.leadsList.slice(leadIndex+1))
  }
},
});
 
export default leadsList;