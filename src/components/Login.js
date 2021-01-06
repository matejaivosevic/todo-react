import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import '../assets/styles/login.scss'
import { loginUserAction } from '../store/actions/authenticationActions'
import { LoginSchema } from '../utils/validations'

const Login = ({ dispatch }) => {
  const handleSubmit = (user) => {
    dispatch(loginUserAction(user))
  }

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div className="center-form">
                  <div className="inputs col-md-6">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Email..."
                    />
                    {errors.email && touched.email && errors.email
                      ? (
                        <span>{errors.email}</span>
                        )
                      : null}
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password..."
                    />
                    {errors.password && touched.password && errors.password
                      ? (
                      <span>{errors.password}</span>
                        )
                      : null}
                    <button type="submit">
                      Login
                                      </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div >
  )
}

export default connect()(Login)
