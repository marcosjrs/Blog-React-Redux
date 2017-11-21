import React from 'react';
import SyncValidationSignupForm from '../forms/SyncValidationSignupForm';

const Signup = (props) => {

  const submit = (datos) => {
    console.log(datos);
    return false;
  }

  return (
    <div className="container-form">
      <SyncValidationSignupForm onSubmit={submit}/>
    </div>
  );
};

export default Signup;

