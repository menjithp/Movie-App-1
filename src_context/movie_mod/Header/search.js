import { Context } from "../../App";
import { Search } from "../icons";
import { useContext, useRef} from "react";

export default () => {
  const {state,dispatch} = useContext(
   Context
  );

  const movies=state.all_upcoming_movies

  const input_elemet=useRef()

  const update_movie_list = (e) =>{
    dispatch(
      {
        type:"update_filtered_upcoming_movies",data:{
        ...movies,
        results: movies.results.filter((movie) =>
          movie.title.toUpperCase().includes(e.target.value.toUpperCase()))      
  }})
    dispatch({type:"set_input_element",data:input_elemet.current.value})
  }

  return (
      <div className="input-search d-flex align-items-center col col-sm-4">
        <Search />
        <input
          ref={input_elemet}
          className="custom-input w-100"
          type="text"
          placeholder="Search"
          onChange={update_movie_list}
        />
      </div>
  );
};
