import Search from "./search";
import { ArrowLeft, Home } from "../icons";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../App";
export default () => {
  const {state,dispatch} = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="header px-3 py-2">
      {state.page === "list_page" ? <Search /> : <div className="movie-detail-things d-flex align-items-center justify-content-between">
            <div>
                <button className="left_Arrow" onClick={() => {navigate("/");dispatch({type:"setpage",data:"list_page"}) }}>
                    <ArrowLeft/>
                </button>&nbsp;&nbsp;
                <span className="movie-details-header">Movie Details</span>
            </div>
            <button className="navigate_to_home" onClick={() => {navigate("/");dispatch({type:"setpage",data:"list_page"})}}>
                  <Home  className="home"/>
            </button>
        </div>
        
      }
     
    </div>
  );
};
