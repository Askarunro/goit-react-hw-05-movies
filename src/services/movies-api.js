// import axios from "axios";
import {useEffect, useState} from 'react'

// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/movie/550?api_key=5d104e06eaa9cbca519409c6ed30e31b";
  
function Services () {
// const [trend, setTrend]=useState(null)
const [trend, setTrend]=useState(null)


  useEffect(() => {


    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=5d104e06eaa9cbca519409c6ed30e31b`)
    .then(res => res.json())
    .then(json => setTrend(json));


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
    return trend
  },[]);
}

export default Services