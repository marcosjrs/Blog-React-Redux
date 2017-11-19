import React from 'react';
import SignupForm from '../forms/SignupForm';

const Signup = (props) => {

  const submit = (datos) => {
    console.log(datos);
    return false;
  }

  return (
    <div>
      <h2>Signup</h2>
      <SignupForm onSubmit={submit}/>
    </div>
  );
};

export default Signup;

