import MovieCard from "./movie_card";
import { MoreMenu } from "../icons";
import { useDispatch ,useSelector} from "react-redux";
import { fetchContent } from "../../store/slice";

export default ({ movie_list }) => {
  
  const { results, page, total_pages } = movie_list;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
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
      
        {page <= total_pages  && (<div className="w-100">
          <button data-tooltip-id="my-tooltip" data-tooltip-content="Load more data" className="fetch-more" onClick={() => dispatch(fetchContent(page + 1))}>
           <MoreMenu />
          </button>
          </div>
        )}
     
    </>
  );
};
