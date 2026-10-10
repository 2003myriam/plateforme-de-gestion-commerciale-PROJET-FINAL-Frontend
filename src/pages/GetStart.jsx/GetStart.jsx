import React, { useState } from "react";
import "./GetStart.css";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function GetStart() {
  /* =====declaration useState======= */
  const [userType, setUserType] = useState("founder");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [role, setRole] = useState("employee");
  const roles = [
    { value: "employee", label: "Employee" },
    { value: "customer_service", label: "customer_service" },
    { value: "product_manager", label: "product_manager" },
    { value: "accountant", label: "accountant" },
    { value: "hr", label: "hr" },
  ];

  const [error, setError] = useState("");
const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  /* =======Stockage es valeur du front ============= */
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlephoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlejoinCodeChange = (e) => {
    setJoinCode(e.target.value);
  };

  const handelcompanynamechange = (e) => {
    setCompanyName(e.target.value);
  };

  const handelcompanyemailchange = (e) => {
    setCompanyEmail(e.target.value);
  };

  /* ========Fonction=============== */

  /* ===============REGISTER EMPLOYEE ================= */
  const registeremployee = async () => {
    try {
      const response = await axios.post("https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/user/register", {
        name,
        email,
        password,
        phone,
        joinCode,
        role,
      });
       // ✅ SUCCESS
    setSuccess(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError(error.response.data.message || "Server error");
    }
  };

  /* ===============REGISTER FOUNDER ================= */
  const registerfounder = async () => {
    try {
      const response = await axios.post(
        "https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/user/getstarted",
        { name, email, password, phone, companyName, companyEmail },
      );
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message || "Server error");
    }
  };

  return (
    <div className="devisé">
      {/* LEFT SIDE */}
      <div className="register-gauche">
        <div className="role-switch">
          <button
            className={`toggle-btn ${userType === "employee" ? "active" : ""}`}
            onClick={() => setUserType("employee")}
          >
            Join a Company
          </button>

          <button
            className={`toggle-btn ${userType === "founder" ? "active" : ""}`}
            onClick={() => setUserType("founder")}
          >
            Create a Company
          </button>
        </div>
        {userType === "employee" ? (
          /* ====================== EMPLOYEE ========================== */
          <div className="form-container">
            <h2>Join an Existing Company</h2>
            <p>
              Create your employee account and join your company using the
              invitation code.
            </p>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>

            <div className="form-group">
              <label>Work Email</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" value={phone} onChange={handlephoneChange} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <select className="role-selection"  value={role} onChange={(e) => setRole(e.target.value)}>
                {roles.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Company Invitation Code</label>
              <input
                type="text"
                value={joinCode}
                onChange={handlejoinCodeChange}
              />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree to Terms & Privacy Policy</span>
            </label>
            {success && <p className="success-message">{success}</p>}
{error && <p className="error-message">{error}</p>}
            <button className="submit-btn" onClick={registeremployee}>
              Create Account
            </button>
          </div>
        ) : (
          /* ============= FOUNDER ============================ */
          <div className="form-container">
            <h2>Create Your Company Workspace</h2>
            <p>Set up your company and invite your team.</p>

            <h3>Personal Information</h3>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="number" value={phone} onChange={handlephoneChange} />
            </div>

            <h3>Company Information</h3>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={handelcompanynamechange}
              />
            </div>

            <div className="form-group">
              <label>Company Email</label>
              <input
                type="email"
                value={companyEmail}
                onChange={handelcompanyemailchange}
              />
            </div>

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree to Terms & Privacy Policy</span>
            </label>
            <p id="error-message">{error}</p>

            <button className="submit-btn" onClick={registerfounder}>
              Create Company
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="register-droit">
        <h1>The <span id="dashboard"> dashboard </span> that helps your business grow.</h1>
        <p>
          Track sales, customers, inventory, assign tasks and analyze
          performance in real time.
        </p>
        <ul>
          <li>
            <FaCheckCircle  className="icone-log"/> Real-time order tracking
          </li>
          <li>
            <FaCheckCircle className="icone-log" /> Automated stock alerts
          </li>
          <li>
            <FaCheckCircle className="icone-log"/> Smart task assignment
          </li>
          <li>
            <FaCheckCircle className="icone-log" /> Planning and schedule management
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GetStart;
