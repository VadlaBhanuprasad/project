import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftMenuOptions from './components/LeftMenuOptions';
import RightSideTable from "./components/RightSideTable"
import Home from './components/Home';

const App = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default App;
