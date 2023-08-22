import {list_loader} from "../Components/list_loader";
import MovieCard from "./movie_card";
import { useSelector } from "react-redux";

export default () => {

  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const movies = state.filtered_upcoming_movies;

if(movies){}
  const { results} = movies;

  let movie_list= results?.length &&
    results?.map((movie, movie_index) => {
      return (
        <div key={movie_index+movie.title}>
          <MovieCard key={movie_index} data={movie} />
        </div>
      );
    })

    if (state.isLoading){
      movie_list.push(...list_loader)
    }
    else if (state.isLoading===false){
       movie_list.filter(movie_list=>list_loader.includes(movie_list))
    }


  return (
      <div className="mx-3 my-2 pt-1 grid-display">
       {movie_list}
      </div>
  );
};
