import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './principal/Home';
import Login from './principal/Login';
import Signup from './principal/Signup';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
};

export default App;