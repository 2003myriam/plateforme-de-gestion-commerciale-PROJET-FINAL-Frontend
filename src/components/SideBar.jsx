import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { RxPeople } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { GrSchedules } from "react-icons/gr";
function SideBar() {
   return (
   <Sidebar
  breakPoint="sm"
  rootStyles={{
    border: "none",
    borderRadius:"none",
    width: "260px",
    minWidth: "260px",

    [".ps-sidebar-container"]: {
      backgroundColor: "#0B1120",
      borderRight: "1px solid #8b5cf6",
      padding: "15px 10px",
    },
  }}
>
  <Menu
    menuItemStyles={{
      button: {
        borderRadius: "12px",
        marginBottom: "6px",
        padding: "12px 14px",
        backgroundColor: "#0B1120",
        color: "#f8fafc",
        fontSize: "15px",
        fontWeight: 500,
        transition: "all 0.25s ease",

        "&:hover": {
          backgroundColor: "#c3c7fd",
          color: "#8b5cf6",
        },
      },

      icon: {
        color: "#8b5cf6",
        fontSize: "18px",
      },
    subMenuContent: {
    backgroundColor: "#0B1120"
  },
    }}
    
  >
    

    <h6
      style={{
        color: "#6b7280",
        padding: "0 14px",
        marginBottom: "10px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "11px",
      }}
    >
      Commerce
    </h6>

    <MenuItem icon={<LuLayoutDashboard />}  component={<Link to="/dashboard" />}>
      Dashboard
    </MenuItem>

    <MenuItem icon={<FiShoppingBag />}>Orders</MenuItem>
    <MenuItem icon={ <RxPeople />}>Customers</MenuItem>
    <MenuItem icon={<AiOutlineProduct />} component={<Link to="/dashboard/product" />}> Products</MenuItem>

    <h6
      style={{
        color: "#6b7280",
        padding: "20px 14px 10px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "11px",
      }}
    >
      Human Resources
    </h6>

    <MenuItem icon={<SlPeople />}> Employees</MenuItem>
    <MenuItem icon={<GrSchedules />}>Leave Requests</MenuItem>
    <MenuItem icon={<RiCalendarScheduleFill />} component={<Link to="/dashboard/shedule" />}>Schedule</MenuItem>
    <SubMenu icon={<FaTasks />} label="Tasks"> 
        <MenuItem component={<Link to="/dashboard/tasks" />}>Task allocation</MenuItem>
         <MenuItem component={<Link to="/dashboard/task" />}>Personnel task space</MenuItem>
    </SubMenu>
   
  </Menu>
</Sidebar>
  );
}

export default SideBar
