import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
// import HomePage from "./components/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews";
import MoviesPage from "./components/MoviesPage";
import Layout from "./components/Layout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const KEY = "api_key=5d104e06eaa9cbca519409c6ed30e31b";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const  HomePage = lazy(()=>import('./components/HomePage'))
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path=":cast" element={<Cast />} />
            <Route path=":reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
