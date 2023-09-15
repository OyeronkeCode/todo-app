import React from 'react'
import './Addtodo.scss'
export default function Addtodo() {
  return (
    <div className='addTodo'>
      <input className='addTodo__input' type="text" placeholder='Add a todo' />
      <button className='addTodo__button'>+</button>
    </div>
  )
} 
