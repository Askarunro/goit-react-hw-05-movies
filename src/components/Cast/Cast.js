import { useParams } from "react-router";
import { Link, NavLink, Outlet } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";
import pnf from "./error404.jpg";
import c from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    API.fetchMovieCredits(movieId).then(setCasts);
  }, []);

  console.log(casts);

  return (
    <ul className={c.list}>
      {casts.map((cast) => (
        <li key={cast.id} className={c.item}>
          <img
            src={
              cast.profile_path === null
                ? `${pnf}`
                : `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
            }
            alt={cast.name}
          />
          <h2>{cast.name}</h2>
          <h3>Character: {cast.character}</h3>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
