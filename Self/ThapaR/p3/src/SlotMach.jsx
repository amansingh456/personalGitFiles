import React from "react"


const SlotM = (props) => {
    // let x = '😄'
    // let y = '😄'
    // let z = '😄'


    //  let x = props.x
    //  let y = props.y
    //  let z = props.z


    // ye teeno let hatane ho to Object destructuring karna pdega 


    let {x,y,z} = props




    if ((x === y) && (y === z)) {
        return (
            <>
                <div className="slot_inner">
                    <h1>{x}  {y}  {z}</h1>
                    <h3>This is Matching</h3>

                </div>
            </>
        )
    }

    else {
        return (
            <>
                <div className="slot_inner">
                    <h1>{x}  {y}  {z}</h1>
                    <h3>This is  Not  Matching</h3>

                </div>
            </>
        )
    }
}


export default SlotM