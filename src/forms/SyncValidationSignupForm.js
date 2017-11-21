import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Campo Obligatorio';
  } else if (values.username.length > 15) {
    errors.username = 'Debe tener 15 caracteres o más';
  }
  if (!values.email) {
    errors.email = 'Campo Obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Formato de email incorrecto';
  }

  return errors;
};

/* const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, quizás eres un poco joven...';
  }
  return warnings;
}; */

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationSignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Nombre"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <button type="submit" disabled={submitting}>
          Enviar
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidationSignupForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
 /*  warn */ // <--- warning function given to redux-form
})(SyncValidationSignupForm)