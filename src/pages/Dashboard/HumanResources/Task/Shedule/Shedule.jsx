import React from 'react'
import { IoMdAdd } from "react-icons/io";

function Shedule() {
  return (
     <>
     <div className="products-header">
        <div className="products-text">
          <h2>Team schedule</h2>
          <p>Organize the time slots and rotations.</p>
        </div>
        
        <div className="product-2btn">
          <button className="product-btn"  >
            <IoMdAdd />
           Add Schedule
          </button>
           
        </div>
      </div>
     </>
  )
}

export default Shedule
