import { NavLink } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";

const MovieDetailsPage = lazy(() => {
  return import("../MoviesPage");
});

const MoviesPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    API.fetchDataSearch(id).then(setTrend);
    // console.log(trend);
  }, [id]);

  const test = (e) => {
    e.preventDefault();
    setId(name);
    setName("");
  };

  return (
    <>
      <form onSubmit={test}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
            title="text"
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {trend && (
        <ul>
          {trend.map((item) => (
            <li key={item.id} data-id={item.id}>
              {/* <MovieDetailsPage/> */}
            <NavLink to={`/movies/${item.id}/`}>{item.title ? item.title : item.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
