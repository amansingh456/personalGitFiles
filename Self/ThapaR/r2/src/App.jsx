import React from "react";
import { Add, Sub, Mul, Div } from './Calc'

function App() {
    return (
        <>
            <ul>
                <li>Sum of two number is  {Add(40, 4)}</li>
                <li>Sub of two number is  {Sub(40, 4)}</li>
                <li>Mul of two number is  {Mul(40, 4)}</li>
                <li>Div of two number is  {Div(40, 3)}</li>
            </ul>
        </>
    )
}

export default App