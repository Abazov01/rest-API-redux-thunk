import React from 'react'
import BoxFirst from './BoxFirst'
import BoxSec from './BoxSec'
import HeadVid from './HeadVid'

export default function YouTubeDet() {
  return (
    <div>
         <HeadVid />
      <section className="box">
        <BoxFirst />
        <BoxSec det={det}/>
        
      </section>
    </div>
  )
}
