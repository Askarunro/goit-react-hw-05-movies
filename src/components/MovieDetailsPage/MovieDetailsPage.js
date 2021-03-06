import { useParams } from "react-router";
import { NavLink, Outlet, Link, useNavigate  } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";
import d from "./MovieDetailsPage.module.css";
import backImg from "./back.png";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  let navigate = useNavigate();
console.log(navigate)
  const [genres, setGenres] = useState([]);
  const [movie, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const a = [];

  useEffect(() => {
    API.fetchDataMovie(movieId).then(setMovies);
    API.fetchDataGenres().then(setGenres);
  }, []);

  useEffect(() => {
    const genreName = genres.forEach((genre) => {
      movie.genres.find((genreId) => {
        if (genreId.id === genre.id) {
          a.push(genre.name);
        }
      });
    });
    setMovieGenres(a);
  }, [movie]);

  console.log(navigate)


  function handleClick() {
    navigate(-1)
  }

  return (
    <>
      {!movie && <h2>Loading</h2>}
      {movie && (
        <>
          <button className={d.imgWrapper} onClick={handleClick}>
            <img src={backImg} alt={`go back`} width={30} />
              <p>Go back</p>
          </button>
          <div className={d.wrapper}>
            <img
              src={
                movie.title &&
                `https://image.tmdb.org/t/p/w200/${
                  movie.poster_path || movie.backdrop_path
                }`
              }
            />
            <div className={d.inner}>
              <h1>{movie.title ? movie.title : movie.name}</h1>
              <p>User Score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>
                {movieGenres.map((item) => (
                  <span key={item}>
                    {item} {"\u00A0"}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};
export default MovieDetailsPage;
