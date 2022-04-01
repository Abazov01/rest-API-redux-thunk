import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'
import Output from '../components/Output/Output';
import Form from './../components/Form/Form';

export default function Cocktail() {
  return (
    <div>
      <Header/>
      <Form cocktail/>
      <Outlet/>
    </div>
  )
}
