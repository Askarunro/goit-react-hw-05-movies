import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import backImg from "./back.png";
import l from "./Layout.module.css";

const Layout = () => {
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
      <Outlet />
    </>
  );
};

export default Layout;
