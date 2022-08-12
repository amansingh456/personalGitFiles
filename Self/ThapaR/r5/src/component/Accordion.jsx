import React, {useState} from 'react'
import {questions} from './api'
import MyAccordion from './MyAccordion'
import './accordion.css'


const Accordion = () => {
  const[data, setData] = useState(questions)

  return (
    <>
    <section className='m_div'>
    <h1>React interview</h1>
    {
      data.map((curElem) => {
        const {id} = curElem;
      return <MyAccordion key = {id} {...curElem}/>
      })
    } 
       </section>
    </>
  )
}

export default Accordion;
