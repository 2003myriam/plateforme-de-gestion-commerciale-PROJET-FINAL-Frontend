import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import GetStart from "./pages/GetStart.jsx/GetStart";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Dashboard/Commerce/Product/Product";
import LoginUser from "./pages/GetStart.jsx/LoginUser";
import Default from "./pages/Dashboard/dashboard/Default";
import TaskRh from "./pages/Dashboard/HumanResources/Task/TaskRh";
import PersonnelTask from "./pages/Dashboard/HumanResources/Task/PersonnelTask";
import LandingPage from "./pages/LandingPage/LandingPage";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import PendingRequests from "./pages/Dashboard/HumanResources/PendingRequests/PendingRequests";
import Employee from "./pages/Dashboard/HumanResources/Employee/Employee";
import Customer from "./pages/Dashboard/Commerce/Customer/Customer";
import Order from "./pages/Dashboard/Commerce/Order/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<GetStart />} />
        <Route path="/login" element={<LoginUser />} />

        {/* Layout Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Default />} />
          <Route path="product" element={<Product />} />
          <Route path="tasks" element={<TaskRh />} />
          <Route path="task" element={<PersonnelTask />} />
          <Route path="request" element={<PendingRequests />} />
          <Route path="employee" element={<Employee />} />
          <Route path="customer" element={<Customer />} />
           <Route path="order" element={<Order/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
