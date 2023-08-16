import { useParams } from "react-router-dom";
import "./movie_detail.css";
import { fetchContent ,setpage,helper_fetch, set_all_upcoming_movies} from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";
import DetailLoader from "../Components/detail_loader";

export default () => {
  const params = useParams();
  const movie_title_params = params.movie_title.split("_page");
  console.log(movie_title_params)
  const movie_title=movie_title_params[0]
  const page_number=+movie_title_params[1]
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  let particular_movie;
  const dispatch = useDispatch();

  if (!movies) {
    for (let i=1;i<page_number+1;i++){
      dispatch(fetchContent(i))
    }
    dispatch(setpage("detail_page"))
  }

  console.log("moviers",movies)
  if (movies) {
    particular_movie = movies.results.filter(
      (movie) => movie.title === movie_title
    );
    particular_movie = particular_movie[0];
  }

  return state.isLoading ? (
    <DetailLoader />
  ) : (particular_movie ?
    <div className="movie-detail-container d-sm-flex">
      <div className="movie-poster" />
      <div className="movie-details flex-grow-1 mt-sm-0 mt-1">
        <div>
          <span className="title-element">{particular_movie?.title}</span>&nbsp;
          <span className="ml-2 d-inline-block vote">
            ({particular_movie?.vote_average})
          </span>
        </div>
        <div>
          <span className="">Year</span>&nbsp;|&nbsp;
          <span className="">Length</span>&nbsp;|&nbsp;
          <span className="">Director</span>&nbsp;|&nbsp;
        </div>
        <div>Cast:</div>
        <div>Description: {particular_movie?.overview}</div>
      </div>
    </div>:<p className="red-text">No Page Found</p>
  );
};
