import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { loadState } from '../localStorage'
import leadsList, { loadleads } from '../services/leadsSlice' 
import prospectsList, { loadProspects } from '../services/prospectsSlice' 

const persistedState = loadState();

const rootReducer = combineReducers({
  prospectsList,
  leadsList
});

const store = configureStore( 
  {reducer: rootReducer},
  persistedState
)

store.dispatch(loadleads());
store.dispatch(loadProspects());
export default store;