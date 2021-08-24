import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLeads } from './requests'

const initialState = {
  leadsList: [],
  prospectsList: [],
  status: 'idle',
  error: null
}

export const loadleads = createAsyncThunk(
  'leadsList/loadleads',
  async () => {
    const response = await getLeads();
    return response;
  }
)

const leadsSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    leadsLoaded:{
      reducer(state, action){
        state.leadsList.push(action.payload)
      }
    }
  },
  extraReducers: {
    [loadleads.pending]: (state, action) => {
      return{
        ...state,
        status: 'loading'
      }
    },
    [loadleads.fulfilled]: (state, action) => {
      return{
        ...state,
        status: 'succeded',
        leadsList: action.payload
      }
    },
    [loadleads.rejected]: (state, action) => {
      return{
        ...state,
        status: 'failed',
        error: action.error.message
      }
    }
  }
})

export const { leadsLoaded } = leadsSlice.actions;

export default leadsSlice.reducer;