import { useState } from 'react'
 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import GetStart from './pages/GetStart.jsx/GetStart';
import Dashboard from './pages/Dashboard/Dashboard';
import Product from './pages/Dashboard/Commerce/Product/Product';
import LoginUser from './pages/GetStart.jsx/LoginUser';
import Default from './pages/Dashboard/dashboard/Default';
import TaskRh from './pages/Dashboard/HumanResources/Task/TaskRh';
import PersonnelTask from './pages/Dashboard/HumanResources/Task/PersonnelTask';
import Shedule from './pages/Dashboard/HumanResources/Task/Shedule/Shedule';
import LandingPage from './pages/LandingPage/LandingPage';
import SplashCursor from './components/SplashCursor/SplashCursor';
 
 
 
 
 
function App() {
 

  return (
    <>
    <SplashCursor/>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<GetStart/>}/>
      <Route path='/login' element={<LoginUser/>}/>
     

       {/* Layout Dashboard */}
        <Route path="/dashboard" element={<Dashboard/>}>
           <Route index element={<Default/>} />
           <Route path="product" element={<Product/>}/>
           <Route path="tasks" element={<TaskRh/>}/>
           <Route path="task" element={<PersonnelTask/>}/>
           <Route path="shedule" element={<Shedule/>}/>
        </Route>
     </Routes>
     
     
    </>
  )
}

export default App
