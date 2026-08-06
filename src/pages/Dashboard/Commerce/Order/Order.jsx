import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AddOrder from '../../../../components/OrderModel/AddOrder';
function Order() {
  const [openOrder, setOpenOrder] = useState(false);
   
  const handleOpenOrder = () => setOpenOrder(true);
  const handleCloseOrder = () => setOpenOrder(false);
  return (
    
     <>
      <div className="products-header">
        <div className="products-text">
          <h2> Orders</h2>
          <p>Manage and track all your sales.</p>
        </div>
        {/* ===================================================== */}
        {/* =====NEW ORDER  ============= */}
        {/* ===================================================== */}
        <div className="product-2btn">
           <button className="product-btn" onClick={handleOpenOrder}>
             <IoMdAdd />
            New order
          </button> 
          {openOrder && <AddOrder onClose={handleCloseOrder} />}
        </div>
      </div>
     </>
  )
}

export default Order
