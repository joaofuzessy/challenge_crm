import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { loadState } from '../localStorage'
import leads, { loadleads } from '../services/leadsSlice' 

const persistedState = loadState();

const rootReducer = combineReducers({
  leads
});

const store = configureStore( 
  {reducer: rootReducer},
  persistedState
)

store.dispatch(loadleads());
 
export default store;