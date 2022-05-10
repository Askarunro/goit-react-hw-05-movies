import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "api_key=5d104e06eaa9cbca519409c6ed30e31b";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";


export const fetchData = async () => {
  try {
    const response = await axios.get(`/trending/all/day?${KEY}&page=1`);
    return response.data.results
  } catch {
    console.log("error");
  }
};

export const fetchDataGenres = async () => {
  try {
    const response = await axios.get(`/genre/movie/list?${KEY}`);
    return response.data.genres
  } catch {
    console.log("error");
  }
};


