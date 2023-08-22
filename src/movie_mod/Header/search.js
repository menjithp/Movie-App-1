import { Search } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import { update_filtered_upcoming_movies,set_input_element } from "../../store/slice";
import { useEffect ,useRef} from "react";
import { fetchContent } from "../../store/slice";

export default () => {
  const state = useSelector(
    (state) => state.upcoming_movie_list_reducer
  );
  const movies=state.all_upcoming_movies

  const dispatch = useDispatch();
  const input_elemet=useRef()

  const update_movie_list = (e) =>{
    dispatch(
      update_filtered_upcoming_movies({
        ...movies,
        results: movies.results.filter((movie) =>
          movie.title.toUpperCase().includes(e.target.value.toUpperCase())
        ),
      })
    );
    dispatch(set_input_element(input_elemet.current.value))
  }

  return (
      <div className="input-search d-flex align-items-center col col-sm-4">
        <Search />
        <input
          ref={input_elemet}
          className="custom-input w-100"
          type="text"
          placeholder="Search"
          onChange={update_movie_list}
        />
      </div>
  );
};
