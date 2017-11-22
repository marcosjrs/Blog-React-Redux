import React from 'react';
import SyncValidationSignupForm from '../forms/SyncValidationSignupForm';
import {userCreated, userError} from '../acciones';
import axios from 'axios';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

const Signup = (props) => {

  const submit = (datos) => {
    axios.post('https://blog-api-u.herokuapp.com/users/',
    {
      user:{
        name:datos.username, 
        email:datos.email,
        password:datos.password,
        password_confirmation:datos.repeat_password
      }
    })
    .then(function(res){
      props.success("Usuario creado correctamente.");
    })
    .catch(function(e){
      props.error(e.response.data.error[0]);
    }); 
    //username: "Un nombre", email: "email@email.com", password: "contraseña"
  }

  return (
    <div className="container-form">
      <SyncValidationSignupForm msgBackEnd={props.mensaje} onSubmit={submit}/>
    </div>
  );
};

const mapStateToProps = (state) => {
 return {
    mensaje: state.mensaje,   
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    success: (mensaje)=>{
      dispatch( userCreated(mensaje) );
      dispatch(reset('syncValidationSignupForm'));
    },
    error: (mensaje)=>{
      dispatch( userError(mensaje) );
    }  
  };
  
 };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

