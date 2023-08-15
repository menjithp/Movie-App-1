import Search from "./search";
import { Home } from "../icons";
import "./index.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default () => {
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const navigate = useNavigate();

  return (
    <div className="header px-3 py-2 d-flex align-items-center justify-content-between">
      {state.page === "list_page" ? <Search /> : "Movie Details"}
      <button className="navigate_to_home" onClick={() => navigate("/")}>
        <Home />
      </button>
    </div>
  );
};
