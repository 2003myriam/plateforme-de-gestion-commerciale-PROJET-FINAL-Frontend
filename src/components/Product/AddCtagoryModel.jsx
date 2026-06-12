import axios from 'axios';
import React, { useState } from 'react'

function AddCtagoryModel({ onClose }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  /* ======================= */
  /* =======ADD CATEGORY===== */
  /* ======================= */
  const addcategory = async () => {
    try {
      axios.post("http://localhost:5001/category/category ", {
        name
         
      });
      setError(error.response.data.message || "Server error");
    } catch (error) {
      setError(error.response.data.message || "Server error");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Catgory</h2>

        <input
          type="text"
          className="modal-input"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        
        <p id="error-message">{error}</p>

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
  
  )
}

export default AddCtagoryModel
