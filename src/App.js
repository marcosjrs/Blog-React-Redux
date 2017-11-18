import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Sign Up</Link>
      <Link to="/">Login</Link>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;