
import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

    const[num,setNum] = useState()

 
    useEffect( () => {

    },[])


    const zero = ''
  return (
    <>
        <h1>You choose {num} value</h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value)
        }}>

            <option value="1">{zero}</option>
            <option value="1">1</option>
            <option value="25">25</option>
            
            \=\
                       <option value="5">5</option>
        </select>
    </>
  )
}

export default App