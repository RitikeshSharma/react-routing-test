import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import user from './user';
import visit from './visit';
import notfound from './notfound';

const routing = (
  <Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user">User</Link></li>
      <li><Link to="/visit">Visit</Link></li>
    </ul>
  </div>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/user" component={user}/>
      <Route path="/visit" component={visit}/>
      <Route component={notfound}/>
    </Switch>
  </Router>

);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
