import React, { useState } from 'react'





const App = () => {
    // const state = useState()
    const [count, setcount] = useState(0)


    const IncNum = () => {
        setcount(count + 1)

    }


    const DecNum = () => {
        setcount(count - 1)

    }

    const ClrState = () => {
        setcount(0)
    }

    return (
        <>
            <h1>{count}</h1>
            <h2>{count === 0 ? '' : 'clicked'}</h2>
            <div className='Mdiv'>
                <button onClick={IncNum}>+1</button>
                <button onClick={ClrState}>Clear</button>
                <button onClick={DecNum}>-1</button>
            </div>
        </>
    )

}

export default App