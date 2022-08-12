import React from "react";
import SlotM from './SlotMach'










const App = () => {
    return (
        <>
            <h1 className="heading"> <span style={{ backgroundColor:'#fff', fontSize:'18px' }}> 🎰Welcome to </span> <span style={{ fontWeight: 'bold', backgroundColor:'#fff' }} > Slot machine game</span>🎰  </h1>
            <div className="slotmachine">
                <SlotM  x = '😄'  y = '😄'  z = '😄' />
                <hr />
                <SlotM  x = '😄'  y = '🥰'  z = '😄' />
                <hr />
                <SlotM  x = '🍎'  y = '🍌'  z = '🍎' />
                <hr />
                <SlotM  x = '💑'  y = '💑'  z = '💑' />
                <hr />
            </div>
        </>
    )
}

export default App