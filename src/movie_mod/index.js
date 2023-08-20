import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieList from "./movie_comp/movie_list";
import { MoreMenu } from "./icons";
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
      {state.page_no <= state.total_pages  && (<div className="w-100">
          <button data-tooltip-id="my-tooltip" data-tooltip-content="Load more data" className="fetch-more" onClick={() => dispatch(fetchContent(state.page_no + 1))}>
           <MoreMenu />
          </button>
          </div>
        )}
     
    </>
  );
};
