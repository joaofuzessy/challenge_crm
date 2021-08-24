import { createReducer } from '@reduxjs/toolkit';
import {
 addToProspectList,
} from '../actions/leadsActions';

const prospectList = createReducer([], {
 [addToProspectList]: (state, action) => {
   const { payload } = action;
   const { _id } = payload;
 
   const leadExists = state.find(lead => lead._id === _id);
  
   if (!leadExists) {
     return [...state, payload]
   }
 },
});
 
export default prospectList;