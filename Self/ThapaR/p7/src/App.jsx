import React, { useState } from "react";
import ToDoLIst from "./ToDoList";




const App = () => {

    const[inputList, setInputList] = useState('');
    const[itemx, setItemx] = useState([]);

    const itemEvent = (evento) => {
        setInputList(evento.target.value)
    };

    const listOfItem = () => {
        setItemx((old) => {
            return [...old, inputList]
        })
        setInputList('')
    };



    const delItem  = (id) => {
        setItemx( (old) => {
            return old.filter( (arrElem, index) => {
                return(
                    index !== id
                )
            })
        })
    }


    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text"   placeholder="Add Items"  value={inputList} onChange={itemEvent}/>
                <button onClick={listOfItem}>+</button>
                <div className="scroll">
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {itemx.map( (itemval,index) => {
                            return(
                                <ToDoLIst
                                    text = {itemval}
                                    key = {index}
                                    id = {index}
                                    onSelect = {delItem}
                                />
                            )
                        })}
                    </ol>
                </div>
                
                </div>
                <h3>-Aman Singh Rajawat</h3> 
            </div>
            
        </>
    )
};

export default App;