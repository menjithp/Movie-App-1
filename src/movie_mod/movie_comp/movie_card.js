import "./movie_card.css";
import { useNavigate, Link } from "react-router-dom";

export default ({ data }) => {
  const { title, overview, vote_average } = data;
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(title)}>
      <div className="image-backdrop" />
      <div className="px-2">
        <div className="d-flex justify-content-between gap-7">
          <span className="ellipsis-box cut-oneline title-element">
            {title}
          </span>
          <span className="vote">({vote_average})</span>
        </div>
        <p className="normal-text ellipsis-box">{overview}</p>
      </div>
    </div>
  );
};
