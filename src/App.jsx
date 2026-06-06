import { useState } from 'react'
 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import GetStart from './pages/GetStart.jsx/GetStart';
 
 
function App() {

  console.log("HOT RELOAD TEST");

  return (
    <>
     <Routes>
      <Route path='/' element={<h1>hello worldddd yess</h1>}/>
      <Route path='/register' element={<GetStart/>}/>
     </Routes>
     
     
    </>
  )
}

export default App
