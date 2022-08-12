import React, { useReducer, useState } from 'react'
import "./style.css"



const reducer = (state, action) => {
      if(action.type === "Incr"){
        state = state + 1
      }

      if( state > 0 && action.type === "Decr"){
        state = state - 1
      }

      return state;
}

const UseReducer = () => {

    // const[myNum, setMyNum] = useState(0)

    const initialData = 0
    const [state, dispatch]= useReducer(reducer, initialData);



  return (
    <>
      <div className="center-div">
          <p>{state}</p>
          <div className="button2" onClick={() => {
            dispatch({type:"Incr"})
          }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Incr <span style={{fontSize: "40px"}}>&uarr;</span>
          </div>
          <div className="button2" onClick={() => {
            dispatch({type:"Decr"})
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

export default UseReducer;
