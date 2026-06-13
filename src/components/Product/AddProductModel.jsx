import React, { useEffect, useState } from "react";
import "./AddProductModel.css";
import axios from "axios";

function AddProductModel({ onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [image, setImage] = useState("");
  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockInitial, setStockInitial] = useState(0);
  const [price, setPrice] = useState(0);
  const [companyId, setCompanyId] = useState("");
  const [category, setCategory] = useState(""); // sélection utilisateur
  const [categories, setCategories] = useState([]); // liste API

  /* ======================= */
  /* =======ADD PRODUCT===== */
  /* ======================= */
  const addproduct = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/products/product",
        {
          title,
          description,
          sku,
          image,
          stockQuantity,
          stockInitial,
          price,
          categoryId: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // ✅ SUCCESS
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };

  /* ======================= */
  /* ======= Get Category===== */
  /* ======================= */
  const gettingcategories = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:5001/category/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCategories(response.data.data);
      // ✅ SUCCESS
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };
  useEffect(() => {
    gettingcategories();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Product</h2>

        <input
          type="text"
          className="modal-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="modal-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          className="modal-input"
          placeholder="SKU"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
        />

        <input
          type="text"
          className="modal-input"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label className="modal-label"> Initial Stock </label>
        <input
          type="number"
          className="modal-input"
          placeholder=" Stock Min"
          value={stockInitial}
          onChange={(e) => setStockInitial(e.target.value)}
        />
        <label className="modal-label">Available Stock </label>
        <input
          type="number"
          className="modal-input"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        
        <label className="modal-label">Price</label>
        <input
          type="number"
          className="modal-input"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="modal-input"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="btn-add" onClick={addproduct}>
            ADD
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProductModel;
