import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Gains from './components/Gains';
import Losses from './components/Losses';
import Nav from './components/Nav'

function App() {
  //Planned changes:
  /*
  * Likely no need for Login page
  * Can combine Gains and Losses into a single view
  */

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/user" component={Login} />
        <Route path="/gains" component={Gains} />
        <Route path="/losses" component={Losses} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
