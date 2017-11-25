import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './principal/Home';
import Login from './principal/Login';
import Signup from './principal/Signup';
import HeaderUserAutenticado from './cabeceras/HeaderUserAutenticado';
import HeaderUserNoAutenticado from './cabeceras/HeaderUserNoAutenticado';
import { connect } from 'react-redux';


const App = (props) => {
  const Header = props.userData && props.userData.jwt? <HeaderUserAutenticado />:<HeaderUserNoAutenticado />;
  return (
    <Router>
      <div>
      {Header}
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
};

const mapStateToProps = (state)=>{
  return ({
    userData:state.userData
  });
}

const mapDispatchToProps = (dispath)=>{
  return ({

  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);