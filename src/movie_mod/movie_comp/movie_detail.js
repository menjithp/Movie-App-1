import { useParams } from "react-router-dom";
import "./movie_detail.css";
import { fetchContent } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";
import DetailLoader from "../Components/detail_loader";

export default () => {
  const params = useParams();
  const movie_title_params = params.movie_title;
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;
  let particular_movie;

  if (!movies) {
    const dispatch = useDispatch();
    dispatch(fetchContent());
  }

  if (movies) {
    particular_movie = movies.results.filter(
      (movie) => movie.title === movie_title_params
    );
    particular_movie = particular_movie[0];
  }

  return state.isLoading ? (
    <DetailLoader />
  ) : (
    <div className="movie-detail-container d-flex">
      <div className="image-backdrop movie_poster" />
      <div className="movie-details flex-grow-1">
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
    </div>
  );
};
