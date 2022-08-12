import React, { useState } from 'react'
import "./style.css"
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Todo = () => {

    const [inputData, setInputData] = useState("")

    const [items, setItems] = useState([])

    // add the items functoin
    const addItem = () => {
        if (!inputData) {
            alert('plzzz fil the data')
        }
        else {
            setItems([...items, inputData]);
            setInputData('')
        }
    }


    return (
        <>
            <div className="main-div">
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todo_logo" />
                        <figcaption> Add Your List Here✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder='✍️ Add items..'
                            className='form-control'
                            value={inputData}
                            onChange={(eve) => setInputData(eve.target.value)}
                        />
                        <AddIcon className='fa add-btn' onClick={addItem} />
                    </div>


                    {/* Show Our Items */}
                    <div className="showItems">

                        {
                            items.map((curElem, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <h3>{curElem}</h3>
                                        <div className="todo-btn">
                                        <BorderColorIcon className='far add-btn' />
                                        <DeleteForeverIcon className='far add-btn' id="dlt" />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>




                    {/* Remove All items */}
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo 