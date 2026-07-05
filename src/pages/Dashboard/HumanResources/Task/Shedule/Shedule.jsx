import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import SheduleModel from '../../../../../components/SheduleModel/SheduleModel';

function Shedule() {
  const [openP, setOpenP] = useState(false);
  const handleOpenShedule  = () => setOpenP(true);
   const handleCloseShedule = () => setOpenP(false);
  return (
     <>
     <div className="products-header">
        <div className="products-text">
          <h2>Team schedule</h2>
          <p>Organize the time slots and rotations.</p>
        </div>
        
        <div className="product-2btn">
          <button className="product-btn" onClick={handleOpenShedule}  >
            <IoMdAdd />
           Add Schedule
          </button>
            {openP && <SheduleModel onClose={handleCloseShedule} />}
        </div>
      </div>
     </>
  )
}

export default Shedule
