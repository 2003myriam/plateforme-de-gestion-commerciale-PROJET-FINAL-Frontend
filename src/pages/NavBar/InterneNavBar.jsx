import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import "./InernNavBar.css";

function InterneNavBar() {
  return (
    <>
      <div className="container_droit">
        <div className="search">
          <CiSearch className="navbar_icone" size={20} />
          <input type="text" placeholder="Search orders, customers, ...." />
        </div>
        <div>
          <MdDarkMode className="navbar_icone" size={20} />
          <IoIosNotifications className="navbar_icone" size={20} />
        
        </div>
      </div>
    </>
  );
}

export default InterneNavBar;
