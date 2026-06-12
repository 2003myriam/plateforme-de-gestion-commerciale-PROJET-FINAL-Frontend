import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./Product.css"
import AddProductModel from "../../../../components/Product/AddProductModel";
function Product() {
 const [open, setOpen] = React.useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    
    <>
      <div className="products-header">
        <div className="products-text">
          <h2>Products & Stocks</h2>
          <p>Manage your catalog and track your stock levels.</p>
        </div>
        <div className="product-2btn">
        <button className="product-btn" onClick={handleOpen}>
          <IoMdAdd />
          New product
        </button>
          {open && <AddProductModel onClose={handleClose} />}






        {/* <button className="product-btn">
          <IoMdAdd />
          New category
        </button> */}
        </div>
       
      </div>
    </>
  );
}

export default Product;
