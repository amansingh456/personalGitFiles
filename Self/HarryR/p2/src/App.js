import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
 
const App = () => {
  return (
    <>

    <Menu/>
        
        <Routes>
            <Route exact  path="/" element={<About/> } />
            <Route path="/contact" element={<Contact/> } />
        </Routes>

        {/* <About />
        <Contact /> */}
    </>
  )
}

export default App