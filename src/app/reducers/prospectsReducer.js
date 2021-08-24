import { createReducer } from '@reduxjs/toolkit';
import {
 addToProspectsList,
} from '../actions/prospectsActions';

const prospectsList = createReducer([], {
 [addToProspectsList]: (state, action) => {
   const { payload } = action;
   const { _id } = payload;
 
   const leadExists = state.prospectsList.find(prospect => prospect._id === _id);
  
   if (!leadExists) {
     const prospectsList = {...state.prospectsList}.push(payload);
     return [...state, prospectsList]
   }
 }
});
 
export default prospectsList;