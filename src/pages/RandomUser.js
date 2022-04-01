import React from 'react'
import { Outlet } from 'react-router-dom'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import Output from '../components/Output/Output'

export default function RandomUser() {
  return (
    <div>
      <Header/>
      <Form user/>
      <Outlet/>
    </div>
  )
}
