import React from 'react'
import './ListTodo.scss'

export default function ListTodo() {
  return (
    <div>
      <div className='listTodo_row'>
        <div className='listTodo__item'>Buy new laptop</div>
        <div className='listTodo__delete'>delete</div>
      </div>
      <div className='listTodo_row'>Create Codehance course</div>
      <div className='listTodo_row'>Create Portfolio Site</div>
      <div className='listTodo_row'>Revise Assignment</div>
    </div>
  )
}
