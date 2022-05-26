import { NavLink, useSearchParams} from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState} from "react";
import { lazy} from "react";

const MovieDetailsPage = lazy(() => {
  return import("../MoviesPage");
});
const MoviesPage = () => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [trend, setTrend] = useState([]);

  const searchName = searchParams.get("query");

  useEffect(() => {
    if (search !== "") {
      API.fetchDataSearch(search).then(setTrend);
      return
    }
    if(searchName){
      API.fetchDataSearch(searchName).then(setTrend);
      return
    }
  }, [search]);

  const searchHandle = (e) => {
    e.preventDefault();
    setSearch(name);
    setSearchParams({ query: name });
    setName("");
  };

  return (
    <>
      <form onSubmit={searchHandle}>
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
              <NavLink to={`/movies/${item.id}/`}>
                {item.title ? item.title : item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
