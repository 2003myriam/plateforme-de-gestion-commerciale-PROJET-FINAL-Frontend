import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Employee.css";

function Employee() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  /* =========================== */
  /* ==========getting users======== */
  /* ============================ */
  const gettingUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5001/user/approvedusers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(response.data.data);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingUsers();
  }, []);
  return (
    <>
      {/* ========================= */}
      {/* ========display users==== */}
      {/* ========================= */}
      <div className="employee-content">
        {users.map((user) => (
          <div className="employee-card" key={user._id}>
            <div className="employee-header">
              <div className="employee-avatar">
                {user.name.charAt(0).toUpperCase()}{/* récupérer le 1er caractère d'une chaîne de caractères. */}
              </div>

              <div className="employee-info">
                <h2>{user.name}</h2>
                <span>{user.role}</span>
              </div>
            </div>

            <div className="employee-contact">
              <ul>
                <li>
                  <MdEmail />
                  <span>{user.email}</span>
                </li>

                <li>
                  <FaPhone />
                  <span>{user.phone || "Non renseigné"}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Employee;
