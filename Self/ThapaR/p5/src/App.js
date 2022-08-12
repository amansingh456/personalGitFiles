import React, { useState } from 'react'

function App() {

  const[initial, setInitial] = useState('')
  const[fullName, setFullName] = useState('')


  const inputEvent = (event) => {
    setInitial(event.target.value)
  }


  const submit = () => {
    setFullName(initial)
  }


  const clr = () => {
     setFullName('');
     setInitial('');
  }

  return (
    <>
        <div>
            <h1>Hello  {fullName}</h1>
            <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={initial} />
            <button onClick={submit}>Submit 👍</button>
            <button onClick={clr}>Clear ❎</button>
        </div>
    </>
  )
}

export default App