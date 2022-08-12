import React, { useState } from 'react'

function App() {
const time = new Date().toLocaleTimeString()


const[ctime, setCtime]= useState(time)


const Updatetime = () =>{
    let timeNew =  new Date().toLocaleTimeString()
    setCtime(timeNew)
}

setInterval(Updatetime, 1000)

  return (
    <>
        <h1>{ctime}</h1>
        {/* <div className="Mdiv">
            <button  onClick={Updatetime}>GEt Time</button>
        </div> */}
    </>
  )
}

export default App