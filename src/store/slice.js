import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import movie_list from '../movie_mod/movie_comp/movie_list';
import {MOVIE_API} from '../properties'

const initialState = {
  filtered_upcoming_movies:null,
  error:"",
  all_upcoming_movies:null,
  page:"list_page",
  isLoading:true,
  page_no:1,
  input:null,
  source_data:null,
  total_pages:null
}
export const helper_fetch= async(page_no) => {
  const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_MOVIE_API_KEY
      }
  };
  let data=await fetch(MOVIE_API+page_no,options)
  data= await data.json()
  return data
  
}
export const fetchContent = createAsyncThunk(
    'content/fetchContent',(page_no)=>helper_fetch(page_no)
    
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
      },
    setpage:(state,action)=>{
      state.page=action.payload
    },
    set_all_upcoming_movies:(state,action)=>{
      state.all_upcoming_movies = action.payload
    },
    set_input_element:(state,action)=>{
      state.input=action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {

      //setting page number in all payload results arr key
      action.payload.results=action.payload.results.map(movie=>({...movie,page:action.payload.page}))

      let source=state.source_data?state.source_data:{[action.payload.page]:action.payload}
      source[action.payload.page]=action.payload
      let all_movie_arr=[]
      Object.keys(source).forEach(key=>{
        all_movie_arr.push(...source[key].results)
      })
      let user_input=state.input.value.toUpperCase().trim()
      let filter_movie_arr;
      if (user_input){
      filter_movie_arr=all_movie_arr.filter(movie=>movie.title.toUpperCase().includes(user_input))
      }else{
        filter_movie_arr=all_movie_arr
      }
      state.all_upcoming_movies={...action.payload,results:all_movie_arr}
      state.filtered_upcoming_movies={...action.payload,results:filter_movie_arr}
      state.source_data=source
      state.isLoading=false
      state.page_no=action.payload.page
      state.total_pages=action.payload.total_pages
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  },
})

export const {update_filtered_upcoming_movies,set_all_upcoming_movies,set_error_state,setpage,set_input_element} = slice.actions
export default slice.reducer
