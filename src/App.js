import "./App.css";
// import { nanoid } from "nanoid";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppBar from "./components/AppBar";
import Movies from "./components/MoviesPage";
import HomePage from "./components/HomePage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews";
import MoviesPage from "./components/MoviesPage";
import Layout from "./components/Layout"
import { useEffect, useState } from "react";
// import axios from "axios";



const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "api_key=5d104e06eaa9cbca519409c6ed30e31b";

// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b";

function App() {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/trending/all/week?${KEY}`
    )
      .then((res) => res.json())
      .then((json) => setTrend(json.results));
  }, []);


const handleTrendItem=(data)=>{
  // console.log(data)
  // console.log(trend.find(item=>item.id==="data"))
  // const test = trend.find(data)
}

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<HomePage trend={trend} handleTrendItem={handleTrendItem} />}></Route> */}
            <Route index element={<HomePage trend={trend} />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path=":movieId" element={<MovieDetailsPage trend={trend} />}>
              <Route path=":cast" element={<Cast />} />
              <Route path=":reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
