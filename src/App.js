import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const KEY = "api_key=5d104e06eaa9cbca519409c6ed30e31b";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const HomePage = lazy(() => {
  return import("./components/HomePage");
});
const MovieDetailsPage = lazy(() => {
  return import("./components/MovieDetailsPage");
});
const MoviesPage = lazy(() => {
  return import("./components/MoviesPage");
});

const Reviews = lazy(() => {
  return import("./components/Reviews");
});
const Cast = lazy(() => {
  return import("./components/Cast");
});
function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route  path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path='*' element={<Navigate to='/'/>}></Route> */}
          <Route path='*' element={<div><h2>Oops we have a problem</h2><h3>Pages not found</h3></div>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
