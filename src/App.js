import React from 'react';
import './App.css';
//components
import Movies from './movie_mod'
import Header from './movie_mod/Header'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MovieDetail from './movie_mod/movie_comp/movie_detail'
function App() {
  return (
    <div className="App d-grid">
    <BrowserRouter>
        <Header />
        <div className="all_route_margin_top_feeder"/>
        <Routes>   
            <Route exact path="/" element={ <Movies /> }/>
            <Route path="/:movie_title" element={ <MovieDetail /> } />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
