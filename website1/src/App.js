import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FavSongs from './FavSongs.js';
import Albums from './Albums';
import Drip from './Drip';
import Home from './Home';

function App() {
  return (
 <div classname="App">
  <Router>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/FavSongs" exact component={FavSongs}/>
    <Route path="/Albums" exact component={Albums}/>
    <Route path="/Drip" exact component={Drip}/>
  </Switch>
  </Router>
  </div>

  );
}

export default App;
