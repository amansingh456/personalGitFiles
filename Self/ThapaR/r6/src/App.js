import React from 'react'
import Footer from './component/Footer';
import Header from './component/Header';
import CreateNote from './component/CreateNote';
import './index.css'
import Note from './component/Note';
import { useState } from 'react';



const App = () => {


const [addItem, setAdditem] = useState([])

const addNote = (note) => {
   setAdditem((oldData) => {
       return[...oldData, note]
   })
}    




    return(
        <>
            <Header />
            <CreateNote 
                passNote={addNote}
            />
            {/* <Note /> */}
            {addItem.map((val,index) => {
                 return <Note 
                     key={index}
                     id={index}
                     title={val.title}
                     content={val.content}
                     
                 />
             })   
            }

            <Footer />
        </>
    );
};

export default App;