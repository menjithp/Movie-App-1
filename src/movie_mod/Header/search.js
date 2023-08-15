import { Search } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { update_filtered_upcoming_movies } from "../../store/slice";

export default () => {
  const movies = useSelector(
    (state) => state.upcoming_movie_list_reducer.all_upcoming_movies
  );
  const dispatch = useDispatch();

  const update_movie_list = (e) =>
    dispatch(
      update_filtered_upcoming_movies({
        ...movies,
        results: movies.results.filter((movie) =>
          movie.title.toUpperCase().includes(e.target.value.toUpperCase())
        ),
      })
    );

  return (
    <div>
      <div className="input-search d-flex align-items-center">
        <Search />
        <input
          className="custom-input ml-3"
          type="text"
          placeholder="Search"
          onChange={update_movie_list}
        />
      </div>
    </div>
  );
};
