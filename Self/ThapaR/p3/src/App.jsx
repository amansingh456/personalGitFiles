import React from "react";
import SlotM from './SlotMach'










const App = () => {
    return (
        <>
            <h1 className="heading"> <span style={{ backgroundColor:'#fff', fontSize:'18px' }}> π°Welcome to </span> <span style={{ fontWeight: 'bold', backgroundColor:'#fff' }} > Slot machine game</span>π°  </h1>
            <div className="slotmachine">
                <SlotM  x = 'π'  y = 'π'  z = 'π' />
                <hr />
                <SlotM  x = 'π'  y = 'π₯°'  z = 'π' />
                <hr />
                <SlotM  x = 'π'  y = 'π'  z = 'π' />
                <hr />
                <SlotM  x = 'π'  y = 'π'  z = 'π' />
                <hr />
            </div>
        </>
    )
}

export default App