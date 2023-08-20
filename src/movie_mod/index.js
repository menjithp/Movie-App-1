import { useContext, useEffect } from "react";
import MovieList from "./movie_comp/movie_list";
import { MoreMenu } from "./icons";
//import properties
import Loader from "./Components/list_loader";
import {Context} from '../App'
import { MOVIE_API } from "../properties";

export const helper_fetch= (page_no) => {
  const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_MOVIE_API_KEY
      }
  };

  try{
       return fetch(MOVIE_API+"?language=en-US&page="+page_no,options).then(data=> data.json())
  }catch(e){
    alert(e.description)
  }

  
}

export default () => {
  const {state,dispatch} = useContext(Context);
  
  const movies=state.filtered_upcoming_movies
  
  useEffect(() => {
    if (!state.filtered_upcoming_movies){
      helper_fetch(1).then(response=>dispatch({type:"set_all_upcoming_movies",data:response}))
    }

  }, []);


  return (
    <>
      {movies?.results?.length ? <MovieList movie_list={movies} />:(!state.isLoading && !state.error && <p className="blue-text">No Movies To Display </p>)}
      {state.isLoading && <Loader />}
      {state.error && <p className="red-text">state.error</p>}
      {state.page_no <= state.total_pages  && (<div className="w-100">
          <button data-testid="load-more" className="fetch-more" onClick={() =>helper_fetch(state.page_no+1).
            then(response=>dispatch({type:"set_all_upcoming_movies",data:response}))}>
           <MoreMenu />
          </button>
          </div>
        )}
     
    </>
  );
};
