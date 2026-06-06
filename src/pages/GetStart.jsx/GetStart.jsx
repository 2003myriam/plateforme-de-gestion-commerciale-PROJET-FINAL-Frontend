import React, { useState } from "react";
import "./GetStart.css";
import { FaCheckCircle } from "react-icons/fa";

function GetStart() {
  const [role, setRole] = useState("founder");

  return (
    <div className="devisé">
      {/* LEFT SIDE */}
      <div className="register-gauche">
        <div className="role-switch">
          <button
            className={`toggle-btn ${role === "employee" ? "active" : ""}`}
            onClick={() => setRole("employee")}
          >
            Join a Company
          </button>

          <button
            className={`toggle-btn ${role === "founder" ? "active" : ""}`}
            onClick={() => setRole("founder")}
          >
            Create a Company
          </button>
        </div>
        {role === "employee" ? (
          <div className="form-container">
            <h2>Join an Existing Company</h2>
            <p>
              Create your employee account and join your company using the
              invitation code.
            </p>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Work Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>

            <div className="form-group">
              <label>Company Invitation Code</label>
              <input type="text" />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree to Terms & Privacy Policy</span>
            </label>

            <button className="submit-btn">Create Account</button>
          </div>
        ) : (
          <div className="form-container">
            <h2>Create Your Company Workspace</h2>
            <p>Set up your company and invite your team.</p>

            <h3>Personal Information</h3>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="number" />
            </div>

            <h3>Company Information</h3>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Company Email</label>
              <input type="email" />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree to Terms & Privacy Policy</span>
            </label>

            <button className="submit-btn">Create Company</button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="register-droit">
        <h1>The dashboard that helps your business grow.</h1>
        <p>
          Track sales, customers, inventory, assign tasks and analyze
          performance in real time.
        </p>
        <ul>
          <li><FaCheckCircle /> Real-time order tracking</li>
          <li><FaCheckCircle /> Automated stock alerts</li>
          <li><FaCheckCircle /> Smart task assignment</li>
          <li><FaCheckCircle /> Planning and schedule management</li>
          
        </ul>
       
      </div>
    </div>
  );
}

export default GetStart;
