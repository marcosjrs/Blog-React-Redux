import React from 'react';
import {Link} from 'react-router-dom';
import { userLogout } from '../acciones';
import { connect } from 'react-redux';

const HeaderUserAutenticado = (props) => {
    return (
      <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to={`${props.userData.id}/posts`}>Mis Posts</Link></li>
            <li><Link to="/login" onClick={props.logout}>Deslogarse</Link></li>
          </ul>
        </nav>
    );
};

const mapStateToProps = (state)=>{
    return ({
      userData:state.userData
    });
  }
  
  const mapDispatchToProps =(dispatch)=>{
    return ({
      logout:()=>{
            dispatch(userLogout());
      }
    });
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserAutenticado);