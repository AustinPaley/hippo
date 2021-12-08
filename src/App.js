import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage.js';
import Customize from './Customize.js';
import CustomizedHome from './CustomizedHome.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route name="customizedHome" path="/customizedHome" component={CustomizedHome} />
        <Route name="customize" path="/customize">
          <Customize />
        </Route>
        <Route name="home" path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
      );
    }

export default App;
