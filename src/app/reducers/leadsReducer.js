import { createReducer } from '@reduxjs/toolkit';

import {
 removeFromLeadsList
} from '../actions/leadsActions';

const leadsList = createReducer([], {
 [removeFromLeadsList]: (state, action) => {
  const leadIndex = state.leads.leadsList.findIndex(lead=> lead._id === action.payload._id);

  if (leadIndex >= 0) {
   return state.leads.leadsList.slice(0, leadIndex).concat(state.leads.leadsList.slice(leadIndex+1))
  }
},
});
 
export default leadsList;