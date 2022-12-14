import React, { useState } from 'react'
import "./style.css"

const UseState = () => {

    const[myNum, setMyNum] = useState(0)


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
          <div className="button2" onClick={() => {
              myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)
          }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Decr <span style={{fontSize: "40px"}}>&darr;</span>
          </div>
      </div>
    </>
  )
}

export default UseState;
