import React from "react";
import "./Features.css";
import dashboard from "../../assets/dashboard.png";

function Features() {
  return (
    <section className="feature-sectionn">
      <div className="feature-headerr">
        <h4>FEATURES</h4>

        <h2>One Platform. Endless Possibilities.</h2>

        <p>
          Manage every aspect of your business through a single, intelligent
          dashboard. Save time, improve collaboration, and stay in control with
          powerful tools built for modern teams.
        </p>
      </div>

      <div className="feature-gridd">
        {/* Dashboard */}
       
          <div className="feature-dashboard">
             
          </div>
      

        {/* Employee */}
        <div className="feature-card-grid div22">
          <h3>Employee Management</h3>

          <p>
            Manage employee profiles, assign roles, approve requests, and keep
            your team organized with ease.
          </p>
        </div>

        {/* Products */}
        <div className="feature-card-grid div33">
          <h3>Product Management</h3>

          <p>
            Add, edit, categorize, and monitor your products while keeping
            inventory up to date.
          </p>
        </div>

        {/* Tasks */}
        <div className="feature-card-grid div44">
          <h3>Task Management</h3>

          <p>
            Organize your team's work efficiently by creating, assigning, and
            tracking tasks from a centralized workspace.
          </p>
        </div>

        {/* Orders */}
        <div className="feature-card-grid div55">
          <h3>Order Management</h3>

          <p>
            Process customer orders, monitor purchases, and manage every
            transaction from a single interface.
          </p>
        </div>

        {/* Security */}
        <div className="feature-card-grid div66">
          <h3>Secure Access</h3>

          <p>
            Protect your business with role-based permissions, secure
            authentication, and controlled user access.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
