import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = () => {

    const[myNum, setMyNum] = useState(0)
    
    useEffect(() =>{
        document.title = `chats(${myNum})`
    // }, []) isme ya iske neche dono me se koi ek chla lo difference chat me uper dikhega
    })


  return (
    <>
      <div className="center-div">
          <p>{myNum}</p>
          <div className="button2" onClick={() => {
              setMyNum(myNum + 1)
          }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Incr <span style={{fontSize: "40px"}}>&uarr;</span>
          </div>
      </div>
    </>
  )
}

export default UseEffect;
