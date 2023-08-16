import "./movie_card.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setpage} from '../../store/slice'
export default ({ data }) => {
  const { title, overview, vote_average } = data;
  const navigate = useNavigate();
  const dispatch=useDispatch()

  return (
    <div className="movie-card" onClick={() => {navigate(title+"_page"+data.page);dispatch(setpage("detail_page"))}}>
      <div className="image-backdrop" />
      <div className="px-2">
        <div className="d-flex align-items-center justify-content-between gap-7">
          <span data-tooltip-id="my-tooltip" data-tooltip-content={title} className="ellipsis-box cut-oneline title-element">
            {title}
          </span>
          <span className="vote">({vote_average})</span>
        </div>
        <p className="normal-text ellipsis-box" >{overview}</p>
      </div>
    </div>
  );
};
