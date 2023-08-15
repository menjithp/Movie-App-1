import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieList from "./movie_comp/movie_list";
//import properties
import { fetchContent } from "../store/slice";
import Loader from "./Components/list_loader";
export default () => {
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  return (
    <>
      {movies?.results?.length && <MovieList movie_list={movies.results} />}
      {state.isLoading && <Loader />}
      {state.error && <p className="red-text">state.error</p>}
    </>
  );
};
