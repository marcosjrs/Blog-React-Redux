import React from 'react';
import {Link} from 'react-router-dom';
import { userLogout } from '../acciones';
import { connect } from 'react-redux';

const HeaderUserAutenticado = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login" onClick={props.logout}>logout</Link>
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