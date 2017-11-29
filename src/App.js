import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './principal/Home';
import Login from './principal/Login';
import Signup from './principal/Signup';
import Post from './principal/Post';
import MisPosts from './principal/MisPosts';
import CrearPost from './principal/CrearPost';
import EditarPost from './principal/EditarPost';
import HeaderUserAutenticado from './cabeceras/HeaderUserAutenticado';
import HeaderUserNoAutenticado from './cabeceras/HeaderUserNoAutenticado';
import { connect } from 'react-redux';


const App = (props) => {
  const autenticado = props.userData && props.userData.jwt;
  if(autenticado){
    return (
      <Router>
        <div >
          <HeaderUserAutenticado />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/post/:id" component={Post}/>
            <Route path="/login" component={MisPosts}/>
            <Route path="/:user/posts" component={MisPosts}/>
            <Route exact path="/:user/post/:id" component={Post}/>
            <Route path="/:user/post/:id/editar" component={EditarPost}/>
            <Route path="/:user/crear" component={CrearPost}/>
          </div>
        </div>
      </Router>
    );
  }else{
    return (
      <Router>
        <div>
        <HeaderUserNoAutenticado />
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/post/:id" component={Post}/>
          </div>
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