import React from 'react';
import SyncValidationLoginForm from '../forms/SyncValidationLoginForm';


const Login = () => {
  const sendData = (datos)=>{
    console.log(datos);
  };
  return (
    <div>
      <SyncValidationLoginForm onSubmit={sendData}/>
    </div>
  );
};

export default Login;

