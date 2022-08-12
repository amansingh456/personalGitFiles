import React, { useState } from 'react'





const App = () => {

    const bgChange = () => {
     let newbg = 'olive'
     Setbg(newbg)
     Setname('OucHH 🐺')
    }

    


    const initialbg = "#8e44ad"
    const[bg, Setbg] = useState(initialbg)
    const[name, Setname] = useState('Click Me')
    


    const bgback = ()=> {
        Setbg(initialbg)
        Setname('Ayyo 😠')
    }



    return(
        <>
            <div className='Mdiv'  style={{backgroundColor:bg}}>
                <button className='Cdiv' onClick={bgChange} onDoubleClick={bgback}>{name}</button>
            </div>
        </>
    )

    
}
export default App