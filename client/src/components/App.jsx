import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register.jsx'
import View from './View.jsx'
export default function App() {
  return (
    <Router>
      <div>
        <ul>
        <ol>
            <Link to="/">Home </Link>
            <Link to="/register">Register Events</Link>
            <Link to="/view">View Events</Link>
          </ol>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/view">
            <View />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h1 className='home-title'>PetPal</h1>
      <h3 className='home-content'>The Only Dogs Meeting Friends Website</h3>
      <hr />
      <div className='home-button'>
          <button className="btn btn-default btn-lg"><Link to = '/Register'>Create Events</Link> <i class="fas fa-paw"></i></button>
      </div>
    </div>
  );
}