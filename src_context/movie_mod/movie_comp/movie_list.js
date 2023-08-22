import { useContext } from "react";
import MovieCard from "./movie_card";
import { Context } from "../../App";

export default () => {

  const {state} = useContext(Context);
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
