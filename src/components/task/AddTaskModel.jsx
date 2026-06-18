import React, { useEffect, useState } from "react";
import axios from "axios";

function AddTaskModel({ onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState(""); // sélection du fondateur
  const [allUser, setAllUser] = useState([]); // liste API

  /* ======================= */
  /* =======ADD TASK===== */
  /* ======================= */
  const addcatask = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/tasks/task",
        {
          title,
          description,
          priority,
          status,
          assignedTo,
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

  /* ===========GET ALL USER========== */
  const gettingUsers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:5001/user/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllUser(response.data.data);
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingUsers();
  }, []);

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
        {/* ===Assign to==== */}
        <select
          onChange={(e) => setAssignedTo(e.target.value)}
          className="modal-input"
        >
          <option value="">Assign To</option>
          {allUser.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
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
  );
}

export default AddTaskModel;
