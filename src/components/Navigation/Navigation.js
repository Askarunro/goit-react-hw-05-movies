import n from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";


const Navigation = () =>(
  <nav>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/movies">Movies</NavLink>
  <NavLink to="/books">Books</NavLink>
</nav>
)


export default Navigation;
