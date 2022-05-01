import "./App.css";
// import { nanoid } from "nanoid";
import {Switch, Route} from 'react-router-dom'
import AppBar from "./components/AppBar";


function App() {
  return (
    <>
        <AppBar/>
        <Route path='/'></Route>
    </>
  );
}

export default App;
