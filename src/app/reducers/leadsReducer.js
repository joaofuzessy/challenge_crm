import { createReducer } from '@reduxjs/toolkit';
import {
 addToProspectList,
} from '../actions/leadsActions';

const prospectList = createReducer([], {
 [addToProspectList]: (state, action) => {
   const { payload } = action;
   const { id } = payload;
 
   const leadExists = state.find(lead => lead.id === id);
  
   if (!leadExists) {
     return [...state, payload]
   }
 },
});
 
export default prospectList;