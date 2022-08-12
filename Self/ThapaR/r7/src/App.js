import React, { createContext } from 'react'
import CompoA from './CompoA'


const FirstName = createContext()
const LastName = createContext()


function App() {
  return (
    <>
    <FirstName.Provider value ={'vinod'}>
    <LastName.Provider value={'sharma'}>
    <CompoA />


     </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default App
export {FirstName}
export {LastName}
