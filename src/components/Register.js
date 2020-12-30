import React from 'react'
import '../assets/styles/register.scss'
import { Formik } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/UserService';

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    last_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'You must enter 6 characters at least!').required('Password is required')
});

const Register = ({history}) => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', first_name: '', last_name: '' }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Please enter email';
                    }
                    if (!values.password) {
                        errors.password = 'Please enter password';
                    }
                    if (!values.first_name) {
                        errors.first_name = 'Please enter first name';
                    }
                    if (!values.last_name) {
                        errors.last_name = 'Please enter last name';
                    }

                    return errors;
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    UserService.register(values).then(() => {
                        history.push('/');
                    }).catch(err => {
                        console.log(err);
                    });
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
                                            required
                                        />
                                        {errors.email && touched.email && errors.email ? (
                                            <span>{errors.email}</span>
                                        ) : null}
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Password..."
                                            required
                                        />
                                        {errors.password && touched.password && errors.password ? (
                                            <span>{errors.password}</span>
                                        ) : null}
                                        <label>First name</label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first_name}
                                            placeholder="First name..."
                                            required
                                        />
                                        {errors.first_name && touched.first_name && errors.first_name ? (
                                            <span>{errors.first_name}</span>
                                        ) : null}
                                        <label>Last name</label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.last_name}
                                            placeholder="Last name..."
                                            required
                                        />
                                        {errors.last_name && touched.last_name && errors.last_name ? (
                                            <span>{errors.last_name}</span>
                                        ) : null}
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
    );
}

export default Register;