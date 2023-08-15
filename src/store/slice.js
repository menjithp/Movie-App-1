import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { MOVIE_API,MOVIE_API_KEY } from '../properties'

const initialState = {
  filtered_upcoming_movies:null,
  error:"",
  all_upcoming_movies:null,
  page:"list_page",
  isLoading:true
}
export const fetchContent = createAsyncThunk(
    'content/fetchContent',
     async() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_MOVIE_API_KEY
            }
        };
        let data=await fetch(process.env.REACT_APP_MOVIE_API,options)
        data= await data.json()
        return data
        
    }
  )

export const slice = createSlice({
  name: 'upcoming_movie_list_reducer',
  initialState,
  reducers: {
    update_filtered_upcoming_movies: (state,action) => {
      state.filtered_upcoming_movies = action.payload
    },
      set_error_state:(state,action)=>{
          state.error=action.payload
      }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
        state.all_upcoming_movies = action.payload
        state.filtered_upcoming_movies = action.payload
        state.isLoading = false
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  },
})

export const {update_filtered_upcoming_movies,set_all_upcoming_movies,set_error_state} = slice.actions
export default slice.reducer
