import React, { useEffect, useState } from 'react'
import { getLocalStorageItem } from '../utils/localStorage'
import '../assets/styles/myProfile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTodos, deleteTodo, handleComplete, editTodo, addTodo } from '../store/actions/todoActions'
import Item from './Item'
import { Modal } from 'react-bootstrap'
import TodoForm from './TodoForm'

const MyProfile = () => {
  const user = JSON.parse(getLocalStorageItem('user'))
  const [showForm, setShowForm] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [itemFormUpdate, setItemFormUpdate] = useState({})
  const history = useHistory()
  const { todos } = useSelector(state => ({
    todos: state.todoReducer.todos
  }))
  const dispatch = useDispatch()
  const handleClose = () => {
    setShowForm(false)
    setIsUpdate(false)
    setItemFormUpdate({})
  }

  const deleteItem = id => {
    dispatch(deleteTodo(id))
  }

  const updateItem = (id, form) => {
    dispatch(editTodo(id, form))
    setShowForm(false)
    setIsUpdate(false)
    setItemFormUpdate({})
  }

  const addItem = form => {
    dispatch(addTodo(form))
    setShowForm(false)
  }

  const handleCompleted = id => {
    dispatch(handleComplete(id))
  }

  const ShowTodoForm = () => (
    <Modal show={showForm} onHide={handleClose}>
        <Modal.Body>
            <TodoForm isUpdate={isUpdate} operation={isUpdate ? updateItem : addItem} itemForUpdate={isUpdate ? itemFormUpdate : null}/>
        </Modal.Body>
    </Modal>
  )

  useEffect(() => {
    if (!user) { history.push('/login') } else { dispatch(getTodos()) }
  }, [])

  return (
    <div className="my-profile-container">
      {showForm ? ShowTodoForm() : null}
      <div className="my-info-section">
        <h5>{user}</h5>
      </div>
      <div className="add-button">
        <button onClick={() => setShowForm(true)}>Add new ToDo</button>
      </div>
      <div className="row">
        <div className="items col-md-12">
          {todos
            ? todos.map((item, i) => (
            <Item key={i} item={item} deleteItem={deleteItem} handleCompleted={handleCompleted} setIsUpdate={setIsUpdate} setShowForm={setShowForm} setItemFormUpdate={setItemFormUpdate}/>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
