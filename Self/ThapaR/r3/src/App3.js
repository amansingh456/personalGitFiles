import React, { useState } from 'react'

function App() {

let NewTime = new Date().toLocaleTimeString()


const [ctime, setCtime] = useState(NewTime)


const Updatetime = () => {
let  NewTimeUpdated = new Date().toLocaleTimeString()
    setCtime(NewTimeUpdated)
}




  return (
    <>
        <h1>{ctime}</h1>
        <div className='Mdiv'>
            <button onClick={Updatetime}>Get Time</button>
        </div>
    </>
  )
}

export default App