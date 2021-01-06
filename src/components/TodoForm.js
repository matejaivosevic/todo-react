import React from 'react'
import '../assets/styles/todoForm.scss'
import { Formik } from 'formik'
import { TodoSchema } from '../utils/validations'
import { Dropdown, Form, Row, Col } from 'react-bootstrap'

const TodoForm = ({ isUpdate, operation, itemForUpdate }) => {
  const handleSubmit = values => {
    values.completed = false
    isUpdate ? operation(itemForUpdate.id, values) : operation(values)
  }

  return (
    <div>
      <Formik
        initialValues={{ title: isUpdate ? itemForUpdate.title : '', description: isUpdate ? itemForUpdate.description : '', priority: isUpdate ? itemForUpdate.priority : '' }}
        validationSchema={TodoSchema}
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
            <div className="row form">
              <div className="col-md-12" style={{ margin: 0, padding: 0 }}>
                <div className="center-form">
                  <div className="inputs col-md-12" style={{ margin: 0 }}>
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      placeholder="Title..."
                    />
                    {errors.title && touched.title && errors.title
                      ? (
                        <span>{errors.title}</span>
                        )
                      : null}
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      placeholder="Description..."
                    />
                    {errors.description && touched.description && errors.description
                      ? (
                        <span>{errors.description}</span>
                        )
                      : null}
                    <label>Priority</label>
                    <Dropdown.Divider />

                    <fieldset>
                      <Form.Group as={Row}>
                        <Col sm={5}>
                          <Form.Check
                            type="radio"
                            label="Low"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={() => (values.priority = 'Low')}
                          />
                          <Form.Check
                            type="radio"
                            label="Medium"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={() => (values.priority = 'Medium')}
                          />
                          <Form.Check
                            type="radio"
                            label="High"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            onChange={() => (values.priority = 'High')}
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                    <Dropdown.Divider />
                    <button type="submit">
                      Confirm
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

export default TodoForm
