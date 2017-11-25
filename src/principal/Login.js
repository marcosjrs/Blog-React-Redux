import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {userError, userLogin} from '../acciones';
import SyncValidationLoginForm from '../forms/SyncValidationLoginForm';


const Login = (props) => {
  const sendData = (datos)=>{
    axios.post('https://blog-api-u.herokuapp.com/v1/login',{
      login:{
        email:datos.email,
        password: datos.password 
      }//email@email.com  | contraseña
    })
    .then(function(resOK){
      props.login(resOK.data);
    })
    .catch(function(data){
      //props.userError(data.response.data.error);
    });
  };
  return (
    <div className="container-form">      
      <SyncValidationLoginForm onSubmit={sendData} msgBackEnd={props.mensaje}/>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return ({
    mensaje:state.mensaje,
    userData:state.userData
  });
};

const mapDispatchToProps = (dispatch)=>{
  return ({
    login:(userData)=>{
      dispatch(userLogin(userData));
    },
    userError:(mensaje)=>{
      dispatch(userError(mensaje));
    }
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

