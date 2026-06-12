import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./Product.css"
import AddProductModel from "../../../../components/Product/AddProductModel";
import AddCtagoryModel from "../../../../components/Product/AddCtagoryModel";
function Product() {
 const [openP, setOpenP] = React.useState(false);
 const [openC, setOpenC] = React.useState(false);

const handleOpenProduct = () => setOpenP(true);
const handleCloseProduct = () => setOpenP(false);

const handleOpenCategory = () => setOpenC(true);
const handleCloseCategory = () => setOpenC(false);

  return (
    
    <>
      <div className="products-header">
        <div className="products-text">
          <h2>Products & Stocks</h2>
          <p>Manage your catalog and track your stock levels.</p>
        </div>
        <div className="product-2btn">
        <button className="product-btn" onClick={handleOpenProduct}>
          <IoMdAdd />
          New product
        </button>
          {openP && <AddProductModel onClose={handleCloseProduct} />}
         <button className="product-btn" onClick={handleOpenCategory}>
          <IoMdAdd />
          New category
        </button> 
        {openC && <AddCtagoryModel onClose={handleCloseCategory} />}
        </div>
       
      </div>
    </>
  );
}

export default Product;
