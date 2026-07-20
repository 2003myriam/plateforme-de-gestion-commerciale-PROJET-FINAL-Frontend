import axios from "axios";
import React, { useState } from "react";
import "./Default.css";

function Default() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [joinCode, setJoinCode] = useState("");

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
        }
      );

      setJoinCode(response.data.joinCode);
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };

  return (
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

        {success && (
          <div className="joincode-message success">
            {success}
          </div>
        )}

        {error && (
          <div className="joincode-message error">
            {error}
          </div>
        )}
      </div>

      <div className="joincode-box">
        <span className="joincode-label">
          Current Invitation Code
        </span>

        <div className="joincode-value">
          {joinCode || "------"}
        </div>

        <small>
          Share this code with your employees. It will expire automatically
          after 5 days.
        </small>
      </div>
    </div>
  );
}

export default Default;