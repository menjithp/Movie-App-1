import { useParams } from "react-router-dom";
import "./movie_detail.css";
import { fetchContent ,setpage,helper_fetch, set_all_upcoming_movies} from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";
import DetailLoader from "../Components/detail_loader";
import { useEffect } from "react";

export default () => {
  const params = useParams();
  const movie_title_params = params.movie_title.split("_page");
  const movie_title=movie_title_params[0]
  const page_number=+movie_title_params[1]
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  let particular_movie;
  const dispatch = useDispatch();


  useEffect(()=>{
    if (!movies) {
      for (let i=1;i<page_number+1;i++){
        dispatch(fetchContent(i))
      }
      dispatch(setpage("detail_page"))
    }
  
  },[])
  if (movies) {
    particular_movie = movies.results.filter(
      (movie) =>{
        return movie.title === movie_title
      } 
    );
    particular_movie = particular_movie[0];
  }


  return state.isLoading ? (
    <DetailLoader />
  ) : (particular_movie ?
    <div className="movie-detail-container m-3 d-sm-flex gap-3">
      <div className="image-container mx-auto" 
      style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${particular_movie.backdrop_path})`}}>
        <a href={`https://image.tmdb.org/t/p/w500${particular_movie.poster_path}`}  target="_blank">
        <img className="h-100 mx-auto d-block" src={`https://image.tmdb.org/t/p/w500${particular_movie.poster_path}`} alt={particular_movie.title+"-image"}/>
        </a>
      </div>
      <div className="mt-3 mt-sm-0 flex-grow-1 d-flex flex-column gap-2">
        <div>
          <span className="title-text">{particular_movie?.title}</span>&nbsp;
          <span className="title-text rating">
            ({particular_movie?.vote_average})
          </span>
        </div>
        <div className="subtitle-text">
          <span className="">Year</span>&nbsp;|&nbsp;
          <span className="">Length</span>&nbsp;|&nbsp;
          <span className="">Director</span>&nbsp;|&nbsp;
        </div>
        <div className="subtitle-text">Cast:</div>
        <div className="description-text">Description: {particular_movie?.overview}</div>
      </div>
    </div>:<p className="red-text">No Page Found</p>
  );
};
