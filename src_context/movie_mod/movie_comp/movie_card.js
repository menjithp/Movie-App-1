import "./movie_card.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";

export default ({ data }) => {
  const { title, overview, vote_average } = data;
  const navigate = useNavigate();
  const {dispatch}=useContext(Context)

  return (
    <div className="movie-card" data-testid="movie-card" onClick={() => {
      navigate(title+"_page"+data.page)
      dispatch({type:"setpage",data:"detail_page"})
    }}>
      <div className="image-backdrop" />
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
