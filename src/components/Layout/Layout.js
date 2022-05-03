import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Layout = () => {
  
    // console.log(trend.data)
    return (
      <>
        <nav>
          <Link to="">HomePage</Link>
          <Link to="movies">Movies</Link>
        </nav>
        <hr/>
        <Outlet/>
      </>
    );
  };

  export default Layout

