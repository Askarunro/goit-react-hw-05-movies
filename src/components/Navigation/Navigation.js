import n from "./Navigation.module.css";
import { Link } from "react-router-dom";


const Navigation = () =>(
  <nav>
  <Link to="/">Home</Link>
  <Link to="/movies">Movies</Link>
  <Link to="/books">Books</Link>
</nav>
)


export default Navigation;
