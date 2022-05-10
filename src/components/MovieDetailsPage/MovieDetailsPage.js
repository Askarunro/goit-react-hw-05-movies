import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { cast } = useParams();
  const [trend, setTrend] = useState([]);
  const [genres, setGenres] =useState([])

  useEffect(() => {
    API.fetchData().then(setTrend);
    API.fetchDataGenres().then(setGenres);
  }, []);

  useEffect(()=>{
    // console.log(trend)
    // console.log(genres)

const genreName = genres.forEach(genre=>{
    console.log(genre)

    const a = movie.genre_ids.find(genreId=>genreId===genre.id)
    console.log(a)
  
    console.log(genre.id)
  })
  
  },[genres])
  const movie = trend.find((movie) => movie.id === Number(cast));

  return (
    <>
      {!movie && <h2>Loading</h2>}
      {movie && (
        <>
          <div className="">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            <div>
              <h1>{movie.original_title}</h1>
              <p>User Score:{movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {/* <p>{movie.genre_ids}</p> */}
            </div>
          </div>
          <div>
            <h2>Additional information</h2>

            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
          </div>
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
