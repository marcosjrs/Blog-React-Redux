import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './principal/Home';
import Login from './principal/Login';
import Signup from './principal/Signup';
import Post from './principal/Post';
import MisPosts from './principal/MisPosts';
import CrearPost from './principal/CrearPost';
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
        <h3>Usuario Autenticado</h3>
        <Route exact path="/" component={Home}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/:user/posts" component={MisPosts}/>
        <Route path="/:user/post/:id" component={Post}/>
        <Route path="/:user/crear" component={CrearPost}/>
        </div>
      </Router>
    );
  }else{
    return (
      <Router>
        <div>
        <HeaderUserNoAutenticado />
        <h3>Usuario No Autenticado</h3>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/post/:id" component={Post}/>
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