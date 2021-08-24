import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProspects } from './requests'

const initialState = {
  prospectsList: [],
  status: 'idle',
  error: null
}

export const loadProspects = createAsyncThunk(
  'prospectsList/loadProspects',
  async () => {
    const response = await getProspects();
    return response;
  }
)

const prospectsSlice = createSlice({
  name: 'prospectsSlice',
  initialState,
  reducers: {
    prospectsLoaded:{
      reducer(state, action){
        state.prospectsList.push(action.payload)
      }
    }
  },
  extraReducers: {
    [loadProspects.pending]: (state, action) => {
      return{
        ...state,
        status: 'loading'
      }
    },
    [loadProspects.fulfilled]: (state, action) => {
      return{
        ...state,
        status: 'succeded',
        prospectsList: action.payload
      }
    },
    [loadProspects.rejected]: (state, action) => {
      return{
        ...state,
        status: 'failed',
        error: action.error.message
      }
    }
  }
})

export const { prospectsLoaded } = prospectsSlice.actions;

export default prospectsSlice.reducer;