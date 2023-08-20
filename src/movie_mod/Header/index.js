import Search from "./search";
import { ArrowLeft, Home } from "../icons";
import "./index.css";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setpage} from '../../store/slice'
export default () => {
  const state = useSelector((state) => state.upcoming_movie_list_reducer);
  const navigate = useNavigate();
 const dispatch=useDispatch();
  return (
    <div className="header px-3 py-2">
      {state.page === "list_page" ? <Search /> : <div className="movie-detail-things d-flex align-items-center justify-content-between">
            <div>
                <button className="left_Arrow" onClick={() => {navigate("/");dispatch(setpage("list_page"))}}>
                    <ArrowLeft/>
                </button>&nbsp;&nbsp;
                <span className="movie-details-header">Movie Details</span>
            </div>
            <button className="navigate_to_home" onClick={() => {navigate("/");dispatch(setpage("list_page"))}}>
                  <Home  className="home"/>
            </button>
        </div>
        
      }
     
    </div>
  );
};
