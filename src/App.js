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
import {useEffect, useState} from 'react'
// import axios from "axios";


// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b";
  

  


function App() {
const [trend, setTrend]=useState([])


  useEffect(() => {


    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5d104e06eaa9cbca519409c6ed30e31b`)
    .then(res => res.json())
    .then(json => setTrend(json.results));


    // const fetchData = async () => {
    //     try {
    //       const response = await api(`https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b`);
    //       console.log(response)
    //     //   setTrend(response.data.hits);
    //       return response;
    //     } catch {
    //       console.log('error')
    //     }
      
    //   }
    // fetchData();
  },[]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage trend={trend} />} >
          <Route path="movies" element={<MoviesPage />}>
              
              </Route>
          <Route path=":movieId" element={<MovieDetailsPage />}>
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
