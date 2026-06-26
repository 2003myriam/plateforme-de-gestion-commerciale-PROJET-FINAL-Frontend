import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

function LoginUser() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async () => {
    try {
      const response = await axios.post("http://localhost:5001/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      
      setError("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="devisé">
      {/* LEFT SIDE */}
      <div className="register-gauche">
        <div className="form-container">
          <h2>Welcome back</h2>
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

          <label className="checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

          <button className="submit-btn" onClick={loginUser}>
            Login
          </button>

          <p className="haveaccount">
            No account ? <Link to="/register">Create one</Link>
          </p>
        </div>
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
            <FaCheckCircle className="icone-log" /> Real-time order tracking
          </li>
          <li>
            <FaCheckCircle className="icone-log"/> Automated stock alerts
          </li>
          <li>
            <FaCheckCircle className="icone-log"/> Smart task assignment
          </li>
          <li>
            <FaCheckCircle className="icone-log"/> Planning and schedule management
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginUser;
