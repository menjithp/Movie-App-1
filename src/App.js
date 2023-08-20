import React, { useReducer } from 'react';
import './App.css';
//components
import Movies from './movie_mod'
import Header from './movie_mod/Header'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieDetail from './movie_mod/movie_comp/movie_detail'

import { createContext } from 'react';

export const Context=createContext()
export const initialState = {
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

export const reducer=(state,action)=>{
switch(action.type){
  case "update_filtered_upcoming_movies": return {...state,filtered_upcoming_movies : action.data}
  case "set_error_state":return {...state,error:action.data}
  case "setpage":return {...state,page:action.data}
  case "loading_true":return{...state,isLoading:true}
  case "set_all_upcoming_movies":{
      
      action.data.results=action.data.results.map(movie=>({...movie,page:action.data.page}))

      let source=state.source_data?state.source_data:{[action.data.page]:action.data}
      source[action.data.page]=action.data
      let all_movie_arr=[]
      Object.keys(source).forEach(key=>{
        all_movie_arr.push(...source[key].results)
      })
      
      let filter_movie_arr;
      let user_input=state.input?.toUpperCase().trim()
      if (user_input){
      filter_movie_arr=all_movie_arr.filter(movie=>movie.title.toUpperCase().includes(user_input))
      }
      else{
        filter_movie_arr=all_movie_arr
      }

      return{
        ...state,
        all_upcoming_movies:{...action.data,results:all_movie_arr},
        filtered_upcoming_movies:{...action.data,results:filter_movie_arr},
        source_data:source,
        isLoading:false,
        page_no:action.data.page,
        total_pages:action.data.total_pages
      }
   
  }
  case "set_input_element":return {...state,input:action.data}
  
  return state
}}


export default function App(){
  return <ContextProvider>
  <BrowserRouter>
  <Header />
  <div className="all_route_margin_top_feeder"/>
  <Routes>   
      <Route exact path="/" element={ <Movies /> }/>
      <Route path="/:movie_title" element={ <MovieDetail /> } />
  </Routes>
</BrowserRouter></ContextProvider>

}

export function ContextProvider({children,teststate}) {
  const [state,dispatch]=useReducer(reducer,teststate||initialState)
  return (
    <Context.Provider value={{state,dispatch}}>
      {children}
    </Context.Provider>
  );
}

