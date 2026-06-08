import React from "react";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";
import InterneNavBar from "../NavBar/InterneNavBar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <SideBar />

      <div className="main-content">
        <InterneNavBar />

        <div className="page-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;