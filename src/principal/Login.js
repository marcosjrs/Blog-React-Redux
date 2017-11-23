import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {userLogged, userError} from '../acciones';
import SyncValidationLoginForm from '../forms/SyncValidationLoginForm';


const Login = (props) => {
  const sendData = (datos)=>{
    axios.post('https://blog-api-u.herokuapp.com/v1/login',{
      login:{
        email:datos.email,
        password: datos.password
      }
    })
    .then(function(resOK){
      //var jwt = resOK.data.jwt;
      props.logged("¡Logado correctamente!");
    })
    .catch(function(data){
      props.userError(data.response.data.error);
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
    mensaje:state.mensaje
  });
};

const mapDispatchToProps = (dispatch)=>{
  return ({
    logged:(mensaje)=>{
      dispatch(userLogged(mensaje));
    },
    userError:(mensaje)=>{
      dispatch(userError(mensaje));
    }
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);

