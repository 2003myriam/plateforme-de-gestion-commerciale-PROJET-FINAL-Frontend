import axios from 'axios';
import React, { useState } from 'react'

function AddPersonnelTask({ onClose }) {
  const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState("");

    /* ======================= */
  /* =======ADD  PERSONNELTASK===== */
  /* ======================= */
  const addcatask = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/persotasks/persotask",
        {
          title,
          description,
          status,
          priority,
          deadline
       
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
        <h2 className="modal-title">Add Task</h2>
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
        
        {/* =============select status================== */}
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="modal-input"
        >
          <option value="">Select Status</option>
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="finished">Finished</option>
        </select>
           {/* ============select priority================= */}
        <select
          onChange={(e) => setPriority(e.target.value)}
          className="modal-input"
        >
          <option value="">Select Priority</option>
          <option value="high">HIGH</option>
          <option value="medium">MEDIUM</option>
          <option value="low">LOW</option>
        </select>
        {/* ======================Deadline========= */}
        <input type="date"  placeholder='Deadline'  className="modal-input" value={deadline}
          onChange={(e) => setDeadline(e.target.value)}/>
        
        
         {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="btn-add" onClick={addcatask}>
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

export default AddPersonnelTask
