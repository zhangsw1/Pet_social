import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from './Create.jsx';


export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <ol>
            <Link to="/">Home </Link>
            <Link to="/Create">Create Events</Link>
          </ol>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h1 className='home-title'>PetPal</h1>
      <h3 className='home-content'>The Only Dogs Meeting Friends Website</h3>
      <hr />
      <div className='home-button'>
          <button className="btn btn-default btn-lg"><Link to = '/Create'>Create Events</Link> <i class="fas fa-paw"></i></button>
      </div>
    </div>
  );
}