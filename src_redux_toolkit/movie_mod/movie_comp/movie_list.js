import MovieCard from "./movie_card";
import { useSelector } from "react-redux";

export default () => {

  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;


  const { results} = movies;



  return (
    <>
      <div className="mx-3 my-2 pt-1 grid-display">
        {results.length &&
          results.map((movie, movie_index) => {
            return (
              <div key={movie_index}>
                <MovieCard key={movie_index} data={movie} />
              </div>
            );
          })}
      </div>
    </>
  );
};
