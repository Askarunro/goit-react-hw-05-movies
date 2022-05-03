import { Link, useParams  } from "react-router-dom";
import { Outlet } from "react-router";
import  * as moviesAPI from '..//..//services/movies-api'
import { useEffect, useState} from "react";




// import Api from '..//../services/movies-api'
// const HomePage = ({ trend, handleTrendItem }) => {
  const HomePage = ({trend}) => {

// const [movies ,setMovies] = useState(null)
// console.log(moviesAPI)
//     useEffect(()=>{
//       moviesAPI.fetchMovies().then(setMovies)
//     },[])
//   // const handleClick = (e) => {
//   //   // handleTrendItem(e.currentTarget.dataset.id)
//   //   const test = e.currentTarget.dataset.id;
//   //   console.log(test);
//   //   console.log(trend.find(item => console.log(item)));
//   //   console.log(trend.find(item => item.id === test));
//   //   // console.log(e.currentTarget.item)
//   //   trend.find((item) => item.id === test);
//   //   handleTrendItem(trend.find((item) => item.id === test));
//   // };
//   console.log(movies)


  // const [trend, setTrend] = useState([]);
  // useEffect(() => {
  //   fetch(`${BASE_URL}/trending/all/week?${KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => setTrend(json.results));
  // }, []);


  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {trend.map((item) => (
          // <li key={item.id} data-id={item.id} onClick={handleClick}>
          <li key={item.id} data-id={item.id}>
            <Link to={`/movies/${item.id}/`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
