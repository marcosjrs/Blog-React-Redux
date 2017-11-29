import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.titulo) {
    errors.titulo = 'Obligatorio'
  } else if (values.titulo.length < 10) {
    errors.titulo = 'Debe tener más de 10 caracteres'
  }else if (values.titulo.length > 30) {
    errors.titulo = 'No debe tener más de 30 caracteres'
  }
  if (!values.cuerpo) {
    errors.cuerpo = 'Obligatorio'
  }
  else if (values.cuerpo.length < 50) {
    errors.cuerpo = 'Debe tener más de 50 caracteres'
  }
  
  return errors
}

const warn = values => {
  const warnings = {}
  //warnings.title = .....
  return warnings
}

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

const renderArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderMsg = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div className="container-msg"><span>{label}</span></div>
)

const CrearPostForm = props => {
  const { handleSubmit, submitting, msgBackEnd } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="titulo"
        type="text"
        component={renderField}
        label="Título"
      />
      <Field name="cuerpo" type="area" component={renderArea} label="Cuerpo" />
      <Field name="msg" type="msg" component={renderMsg} label={msgBackEnd} />

      <div>
        <button type="submit" disabled={submitting}>
          CREAR
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'crearPostForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(CrearPostForm)