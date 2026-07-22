import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-gauche">
        <h2>ABOUT THE PLATFORM</h2>

        <h1>Powerful management made simple.</h1>

        <p>
          Our platform centralizes products, inventory, employee management,
          planning, and task allocation into a single intuitive dashboard.
          Designed to help teams save time, improve collaboration, and make
          data-driven decisions.
        </p>
      </div>

      <div className="about-droit">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-top">
              <span className="about-number">01</span>
              <h3>Product Management</h3>
            </div>

            <p className="about-description">
              Organize products, categories and inventory from one centralized
              dashboard.
            </p>

            <div className="about-tags">
              <span>Products</span>
              <span>Categories</span>
              <span>Inventory</span>
              <span>Stock Tracking</span>
              <span>Suppliers</span>
              <span>Analytics</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="about-card">
            <div className="about-top">
              <span className="about-number">02</span>
              <h3>Employee Management</h3>
            </div>

            <p className="about-description">
              Manage your employees, assign roles and keep your team organized
              efficiently.
            </p>

            <div className="about-tags">
              <span>Employees</span>
              <span>Roles</span>
              <span>Permissions</span>
              <span>Attendance</span>
              <span>Departments</span>
            </div>
          </div>

          <div className="about-card">
            <div className="about-top">
              <span className="about-number">03</span>
              <h3>Smart Scheduling</h3>
            </div>

            <p className="about-description">
              Create weekly schedules, monitor availability and plan resources
              effortlessly.
            </p>

            <div className="about-tags">
              <span>Weekly Planning</span>
              <span>Tasks</span>
              <span>Deadlines</span>
              <span>Notifications</span>
              <span>Calendar</span>
              <span>Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
