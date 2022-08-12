import React, { useState } from 'react'
import '../index.css'
import Button from '@mui/material/Button';
// import AddIcon from '@mui/material/Icon/Add';

function CreateNote(props) {

  const [expand, setExpand] = useState(false)


  const [note, setNote] = useState({
    title: '',
    content: '',
  })

 const InputEvent = (event) => {

//  const value = event.target.value;
//  const name = event.target.name;

 const {name,value} = event.target

   setNote((Prevdata) => {
      return{
        ...Prevdata,
        [name]: value,

      }
   })
 }
 
const addEvent = () => {
  props.passNote(note)
  setNote({
    title: '',
    content: '',
  })
}


const expandIt = () => {
  setExpand(true)
}


const backToNormal = () => {
  setExpand(false)
}
   
  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal} >
        <form action="">

          {expand ?
            <input
            type="text"
            name='title'
            value={note.title}
            onChange={InputEvent} 
            placeholder='Title' 
            autoComplete='off'
              /> : null}


            <textarea 
            cols="" 
            rows="" 
            name='content'
            value={note.content} 
            onChange={InputEvent} 
            placeholder='Write a note ...'
            onClick={expandIt}
            ></textarea>

            {expand ?
            <Button className='MuiButton_root' onClick={addEvent} >
              <addicon className='plus_sign'>+</addicon>
            </Button> : null}

        </form>
      </div>
    </>
  )
}

export default CreateNote