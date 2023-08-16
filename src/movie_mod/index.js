import { useSelector, useDispatch } from "react-redux";
import { useEffect,useRef } from "react";
import MovieList from "./movie_comp/movie_list";
//import properties
import { fetchContent } from "../store/slice";
import Loader from "./Components/list_loader";
export default () => {
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (movies)return
    dispatch(fetchContent(1));
  }, []);

  return (
    <>
      {movies?.results?.length ? <MovieList movie_list={movies} />:(!state.isLoading && !state.error && <p className="blue-text">No Movies To Display </p>)}
      {state.isLoading && <Loader />}
      {state.error && <p className="red-text">state.error</p>}
    </>
  );
};
