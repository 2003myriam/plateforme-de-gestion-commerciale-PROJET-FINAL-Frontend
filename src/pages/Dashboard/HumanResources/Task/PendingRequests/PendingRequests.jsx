import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PendingRequests.css";
import { FaSave } from "react-icons/fa";

function PendingRequests() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [pending, setPending] = useState([]);
  const [refresh, setRefresh] = useState(false);

  /* ======================= */
  /* ===== Generate Code ==== */
  /* ======================= */

  const generateCode = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:5001/code/generatecode",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setJoinCode(response.data.joinCode);
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };

  /* ================================== */
  /* ========Getting pending users===== */
  /* =============================== */
  const gettingpendingusers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:5001/user/pendingusers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setPending(response.data.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingpendingusers();
  }, [refresh]);
  /* ================================== */
  /* ========Update users status ===== */
  /* =============================== */
  const updateStatus = async (id, status) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:5001/user/updateusers/${id}`,
        {
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setRefresh(!refresh);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };

  return (
    <section>
      <div className="joincode-card">
        <div className="joincode-header">
          <h2>Invitation Code</h2>

          <p>
            Generate a secure invitation code that allows employees to join your
            company. The generated code remains valid for 5 days.
          </p>

          <button className="product-btn" onClick={generateCode}>
            Generate Code
          </button>

          {success && <div className="joincode-message success">{success}</div>}

          {error && <div className="joincode-message error">{error}</div>}
        </div>

        <div className="joincode-box">
          <span className="joincode-label">Current Invitation Code</span>

          <div className="joincode-value">{joinCode || "------"}</div>

          <small>
            Share this code with your employees. It will expire automatically
            after 5 days.
          </small>
        </div>
      </div>
      {/* =========display pending users===== */}
      <table className="pending-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {pending.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.role
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </td>

              <td>
                <select
                  defaultValue={user.status}
                  onChange={(e) =>
                    setPending(
                      pending.map((item) =>
                        item._id === user._id
                          ? { ...item, status: e.target.value }
                          : item,
                      ),
                    )
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td>
              <FaSave onClick={() => updateStatus(user._id, user.status)}/>  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default PendingRequests;
