import React from 'react'
import '../assets/styles/register.scss'
import { Formik } from 'formik'
import { SignupSchema } from '../utils/validations'
import { connect } from 'react-redux'
import { registerUserAction } from '../store/actions/authenticationActions'
import { useHistory } from 'react-router-dom'

const Register = ({ dispatch }) => {
  const history = useHistory()
  const handleSubmit = values => {
    dispatch(registerUserAction(values))
    history.push('/login')
  }

  return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
                validationSchema={SignupSchema}
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
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            placeholder="First name..."
                                        />
                                        {errors.firstName && touched.firstName && errors.firstName
                                          ? (
                                            <span>{errors.firstName}</span>
                                            )
                                          : null}
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            placeholder="Last name..."
                                        />
                                        {errors.lastName && touched.lastName && errors.lastName
                                          ? (
                                            <span>{errors.lastName}</span>
                                            )
                                          : null}
                                        <button type="submit">
                                            Finish registration
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

export default connect()(Register)
