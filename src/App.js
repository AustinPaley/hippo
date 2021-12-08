import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage.js';
import Customize from './Customize.js';
import CustomizedHome from './CustomizedHome.js';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route name="home" path='/' element={<Homepage />}/>
        <Route name="customize" path="/customize" element={<Customize />} />
        <Route name="customizedHome" path="/customizedHome" element={<CustomizedHome />} />
      </Switch>
    </Router>
      );
    }

export default App;
