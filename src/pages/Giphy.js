import React from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import Output from '../components/Output/Output'

export default function Giphy() {
  return (
    <div>
      <Header/>
      <Form giphy/>
      <Output giphy/>
    </div>
  )
}
