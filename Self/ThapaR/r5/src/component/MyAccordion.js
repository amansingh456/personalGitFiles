import React, {useState} from 'react'
import './accordion.css'

function MyAccordion({question, answer}) {
    const[show, setShow] = useState(false)

  return (
    <>
        <div className="m_heading">
            
            <h3>  <p onClick={() => setShow(!show)}> {show ? "➖" : "➕"}</p> {question}</h3>
        </div>
        {
            show && <p className='answers'>{answer}</p>
        }
        

    </>
  )
}

export default MyAccordion