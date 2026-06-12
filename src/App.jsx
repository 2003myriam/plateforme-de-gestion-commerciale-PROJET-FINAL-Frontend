import { useState } from 'react'
 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import GetStart from './pages/GetStart.jsx/GetStart';
import Dashboard from './pages/Dashboard/Dashboard';
import Product from './pages/Dashboard/Commerce/Product/Product';
import LoginUser from './pages/GetStart.jsx/LoginUser';
 
 
 
 
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<h1>hello worldddd yess</h1>}/>
      <Route path='/register' element={<GetStart/>}/>
      <Route path='/login' element={<LoginUser/>}/>
     

       {/* Layout Dashboard */}
        <Route path="/dashboard" element={<Dashboard/>}>
           <Route index element={<h1>hey</h1>} />
           <Route path="product" element={<Product/>}/>
        </Route>
     </Routes>
     
     
    </>
  )
}

export default App
