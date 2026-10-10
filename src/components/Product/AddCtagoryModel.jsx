import axios from "axios";
import React, { useState } from "react";

function AddCtagoryModel({ onClose }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ======================= */
  /* =======ADD CATEGORY===== */
  /* ======================= */
  const addcategory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/category/category",
        {
          name,
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

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Category</h2>

        <input
          type="text"
          className="modal-input"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="btn-add" onClick={addcategory}>
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

export default AddCtagoryModel;
