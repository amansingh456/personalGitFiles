import React, { useEffect, useState } from 'react'

function App() {

    const [num, setNum] = useState(0)
    // const [snum, setSnum] = useState(0)

    useEffect(() => {
         document.title=`you clicked me ${num} times`
    })


    const increm = () => {
        setNum(num + 1);
        
    }

  return (
    <>
        <button onClick={increm}>click Me {num} </button>
       
        

    </>
  )
}

export default App