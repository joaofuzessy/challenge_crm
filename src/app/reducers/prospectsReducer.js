import { createReducer } from '@reduxjs/toolkit';
import {
 addToProspectsList,
} from '../actions/prospectsActions';

const prospectsList = createReducer([], {
 [addToProspectsList]: (state, action) => {
   const { payload } = action;
   const { _id } = payload;
 
   const leadExists = state.find(prospect => prospect._id === _id);
  
   if (!leadExists) {
     return [...state, payload]
   }
 }
});
 
export default prospectsList;