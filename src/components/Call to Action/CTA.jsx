import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="CTA-section">
      <div className="CTA-content">
        <h2>
          Ready to Transform Your <span>Workflow?</span>
        </h2>

        <p>
          Join thousands of businesses simplifying their daily operations with
          our all-in-one management platform. Manage products, employees,
          orders, and tasks from one powerful dashboard.
        </p>
        <Link to="/register" className="primary-btn">Get Started</Link>
      </div>
    </section>
  );
}

export default CTA;
