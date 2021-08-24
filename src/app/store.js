import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { loadState } from '../localStorage'
import prospectList from './reducers/leadsReducer';
import leads, { loadleads } from '../services/leadsSlice' 

const persistedState = loadState();

const rootReducer = combineReducers({
  prospectList,
  leads
});

const store = configureStore( 
  {reducer: rootReducer},
  persistedState
)

store.dispatch(loadleads());
 
export default store;