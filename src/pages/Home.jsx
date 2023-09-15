import React from 'react'
import Container from '../components/container/Container'
import Header from'../components/header/Header'
import Addtodo from '../components/add_todo/Addtodo'
import ListTodo from '../components/list_todo/ListTodo'

export default function Home() {
  return (
    <Container>
      <Header/>
      <Addtodo/>
      <ListTodo/>
    </Container>
 )
}
