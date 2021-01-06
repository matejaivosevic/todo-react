// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/styles/item.scss'
import { Form } from 'react-bootstrap'

const Item = ({ item, deleteItem, handleCompleted, setIsUpdate, setShowForm, setItemFormUpdate }) => {
  const handleUpdate = () => {
    setItemFormUpdate(item)
    setIsUpdate(true)
    setShowForm(true)
  }

  const Low = {
    border: '2px solid yellowgreen'
  }
  const Medium = {
    border: '2px solid green'
  }
  const High = {
    border: '2px solid #c24'
  }

  return (
    <div className="item col-md-4" style={item.priority === 'Low' ? Low : item.priority === 'Medium' ? Medium : item.priority === 'High' ? High : Low}>
      <div className="title-section">
        <div className="row">
          <div className="title-section col-md-9">
            <h5>{item.title}</h5>
          </div>
          <div className="edit-section col-md-2">
            <span onClick={() => handleUpdate()}>edit</span>
          </div>
          <div className="delete-section col-md-1">
            <span onClick={() => deleteItem(item.id)}>X</span>
          </div>
        </div>
        <p>{item.description}</p>
      </div>
      <Form.Check
        label={item.completed ? 'Completed' : null}
        checked={!!item.completed}
        onChange={() => handleCompleted(item.id)}
      />
    </div>
  )
}

export default Item
