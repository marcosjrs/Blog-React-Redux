import React from 'react';
import SyncValidationSignupForm from '../forms/SyncValidationSignupForm';

const Signup = (props) => {

  const submit = (datos) => {
    console.log(datos);
    return false;
  }

  return (
    <div>
      <h2>Signup</h2>
      <SyncValidationSignupForm onSubmit={submit}/>
    </div>
  );
};

export default Signup;

