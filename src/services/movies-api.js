// import axios from "axios";
import { useEffect, useState } from "react";

// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "api_key=5d104e06eaa9cbca519409c6ed30e31b";

async function moviesAPI(url ='', config={}) {
  const response = await fetch(url, config);
  return response.ok?await response.json():Promise.reject(new Error('Not found'))

  // const [trend, setTrend] = useState(null);

//   // `${BASE_URL}/trending/all/week?${KEY}`
//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/trending/all/week?api_key=5d104e06eaa9cbca519409c6ed30e31b`
//     )
//       .then((res) => res.json())
//       .then((json) => setTrend(json.results));
//   }, []);
// console.log(trend)
// return trend



  //   useEffect(() => {

  //     fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5d104e06eaa9cbca519409c6ed30e31b`)
  //     .then(res => res.json())
  //     .then(json => setTrend(json));

  //     // const fetchData = async () => {
  //     //     try {
  //     //       const response = await api(`https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b`);
  //     //       console.log(response)
  //     //     //   setTrend(response.data.hits);
  //     //       return response;
  //     //     } catch {
  //     //       console.log('error')
  //     //     }

  //     //   }
  //     // fetchData();
  //     return trend
  //   },[]);
}

// export default MoviesAPI;


export function fetchMovies(){
  moviesAPI(`https://api.themoviedb.org/3/trending/all/week?api_key=5d104e06eaa9cbca519409c6ed30e31b`)
}