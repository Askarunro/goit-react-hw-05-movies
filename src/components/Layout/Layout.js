import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import backImg from "./back.png";
import l from "./Layout.module.css";

const Layout = () => {
  // console.log(trend.data)
  return (
    <>
      <nav className={l.navigate}>
        <NavLink to="" className={l.link}>
          HomePage
        </NavLink>
        <NavLink to="movies" className={l.link}>
          Movies
        </NavLink>
      </nav>
      <hr />
      <Link to="/">
        <div className={l.wrapper}>
          <img src={backImg} alt={`go back`} width={30} />
          <p>Go back</p>
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default Layout;
