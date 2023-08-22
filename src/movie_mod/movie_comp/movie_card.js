import "./movie_card.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setpage} from '../../store/slice'
export default ({ data }) => {
  const { title, overview, vote_average,poster_path } = data;
  const navigate = useNavigate();
  const dispatch=useDispatch()

  return (
    <div className="movie-card" data-testid="movie-card" onClick={() => {navigate(title+"_page"+data.page);dispatch(setpage("detail_page"))}}>
        
        <div className="image-backdrop">
         {poster_path &&  <img className="h-100 w-100" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title+"-image"}/>
        }</div>   
      <div className="px-2">
        <div className="d-flex align-items-center justify-content-between gap-7">
          <span className="ellipsis-box cut-oneline title-element">
            {title}
          </span>
          <span className="vote">({vote_average})</span>
        </div>
        <p className="normal-text ellipsis-box" >{overview}</p>
      </div>
    </div>
  );
};
