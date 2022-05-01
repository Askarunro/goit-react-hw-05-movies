import { Link } from "react-router-dom";
import { Outlet } from "react-router";
// import Api from '..//../services/movies-api'
const HomePage = ({trend}) => {
  
  // console.log(trend.data)
  return (
    <>
      <nav>
        <Link to="">HomePage</Link>
        <Link to="movies">Movies</Link>
      </nav>
      <hr/>
      <h1>HomePage</h1>
      <ul>
        {trend.map((item)=>(<li key={item.id}>
          <Link to="/movies/:movieId">{item.original_title}</Link>
        </li>))}
      </ul>
      
    </>
  );
};
export default HomePage;
