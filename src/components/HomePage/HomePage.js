import { Link } from "react-router-dom";
import * as API from "..//..//services/movies-api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    API.fetchData().then(setTrend);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trend.map((item) => (
          <li key={item.id} data-id={item.id}>
            <Link to={`/movies/${item.id}/`}>{item.title ? item.title : item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
