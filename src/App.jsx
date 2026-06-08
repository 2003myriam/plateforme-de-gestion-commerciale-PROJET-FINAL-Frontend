import { useState } from 'react'
 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import GetStart from './pages/GetStart.jsx/GetStart';
import Dashboard from './pages/Dashboard/Dashboard';
 
 
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<h1>hello worldddd yess</h1>}/>
      <Route path='/register' element={<GetStart/>}/>
     

       {/* Layout Dashboard */}
        <Route path="/dashboard" element={<Dashboard/>}>
           <Route index element={<h1>hey</h1>} />
           
        </Route>
     </Routes>
     
     
    </>
  )
}

export default App
