import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './principal/Home';
import Login from './principal/Login';
import Signup from './principal/Signup';
import Post from './principal/Post';
import HeaderUserAutenticado from './cabeceras/HeaderUserAutenticado';
import HeaderUserNoAutenticado from './cabeceras/HeaderUserNoAutenticado';
import { connect } from 'react-redux';


const App = (props) => {
  const autenticado = props.userData && props.userData.jwt;
  if(autenticado){
    return (
      <Router>
        <div>
        <HeaderUserAutenticado />
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/post/:id" component={Post}/>
        </div>
      </Router>
    );
  }else{
    return (
      <Router>
        <div>
        <HeaderUserNoAutenticado />
        <Route path="/" component={Login}/>
        </div>
      </Router>
    );
  }
 
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