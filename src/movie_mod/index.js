import { useSelector, useDispatch } from "react-redux";
import { useEffect,useRef } from "react";
import MovieList from "./movie_comp/movie_list";
import { MoreMenu } from "./icons";
//import properties
import { fetchContent, helper_fetch } from "../store/slice";
import Loader from "./Components/list_loader";
export default () => {
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  const dispatch = useDispatch();

  const observing_element=useRef();
  
  useEffect(() => {
    if (movies)return
    dispatch(fetchContent(1));
  }, []);


  useEffect(()=>{
    const observer=new IntersectionObserver(enteries=>{
      if (enteries[0].isIntersecting ){

        console.log("interesting")

        if (state.page_no >= state.total_pages)return 
        dispatch(fetchContent(state.page_no + 1))
      }
},{threshold:0.8})
      let last_movie_card=document.querySelectorAll(".movie-card")
      let lastElement;
      if (last_movie_card.length){
        last_movie_card=[...last_movie_card]
        lastElement = last_movie_card.slice(-1);
        lastElement=lastElement[0]
        observer.observe(lastElement)
      }
     // console.log("last_movie_card",last_movie_card)

      return()=>{
      if (lastElement)observer.unobserve(lastElement)
      }
  },[state.filtered_upcoming_movies])


  return (
    <div data-testid="scrolling-container" className="mt-2 pt-2 overflow-auto">
      {movies?.results?.length ? <MovieList movie_list={movies} />:(!state.isLoading && !state.error && 
      <p className="blue-text">No Movies To Display </p>)}
      {state.isLoading && <Loader />} 
      {state.error && <p className="red-text">state.error</p>}
      {state.page_no < state.total_pages  && (<div className="w-100">
          <button data-testid="load-more" className="fetch-more" onClick={() => dispatch(fetchContent(state.page_no + 1))}>
           <MoreMenu />
          </button>
          </div>
        )}
     
    </div>
  );
};
