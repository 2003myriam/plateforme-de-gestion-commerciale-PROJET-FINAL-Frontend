import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import "./Product.css";
import AddProductModel from "../../../../components/Product/AddProductModel";
import AddCtagoryModel from "../../../../components/Product/AddCtagoryModel";
 import { FaTrashCan } from "react-icons/fa6"; 
import axios from "axios";
function Product() {
  const [openP, setOpenP] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const handleOpenProduct = () => setOpenP(true);
  const handleCloseProduct = () => setOpenP(false);

  const handleOpenCategory = () => setOpenC(true);
  const handleCloseCategory = () => setOpenC(false);

  /* ================================== */
  /* ========Getting all products===== */
  /* =============================== */
  const gettingproducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/products/product",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setProducts(response.data.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingproducts();
  }, [refresh]);

   /* ================================== */
  /* ======== delete product===== */
  /* =============================== */
  const deleteproduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/products/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setProducts((prev) => prev.filter((p) => p._id !== id));
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };



  /* ====================RETURN===================================== */
  return (
    <>
      <div className="products-header">
        <div className="products-text">
          <h2>Products & Stocks</h2>
          <p>Manage your catalog and track your stock levels.</p>
        </div>
        {/* ===================================================== */}
        {/* =====NEW CATEGORY AND NEW PRODUCT BUTTON============= */}
        {/* ===================================================== */}
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
      {/* ===================================================== */}
      {/* =============Display all product===================== */}
      {/* ===================================================== */}

      <div className="products-grid">
        {products.map((product) => {
          const stockPercent =
            (product.stockQuantity / product.stockInitial) * 100;

          const vendus = product.stockInitial - product.stockQuantity;

          let color;
          let status;

          if (stockPercent > 60) {
            color = "green";
          } else if (stockPercent > 30) {
            color = "orange";
            status = "Low stock";
          } else {
            color = "red";
            status = "restock";
          }

          return (
            <div className="product-card" key={product._id}>
              {/* IMAGE PRODUIT  */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />

                {/* CATEGORY BADGE */}
                <span className="product-category">
                  {product.categoryId?.name}
                </span>
              </div>
              {/* TITLE */}
              <h3 className="product-title">{product.title}</h3>
              {/* PRICE */}
              <p className="product-price">{product.price} DA</p>
              {/* STOCK */}
              <label htmlFor="progress-bar" className="stock-text">
                available Stock
              </label>{" "}
              <progress
                id="progress-bar"
                value={Math.round(stockPercent)}
                max="100"
                style={{ accentColor: color, width: "90%" }}
              >
                {Math.round(stockPercent)}{" "}
              </progress>
              <div className="status-stock">
                <p className="sold-text">{vendus} sold</p>
                <p style={{ color: color }}>{status}</p>
              </div>
               <FaTrashCan style={{color:"red" , cursor:"pointer"}} 
               onClick={() => deleteproduct(product._id)}/> 
         
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
