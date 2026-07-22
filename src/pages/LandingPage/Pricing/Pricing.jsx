import React from 'react'
import './Pricing.css'
import { MdDone } from "react-icons/md";
function Pricing() {
  return (
    <div     >
  <div className="pricing-title">
    <h2>Pricing</h2>
    <h1>Choose the plan that fits your team's growth.</h1>
    <p>
      Start for free and upgrade as your business expands.
      No hidden fees. Cancel anytime.
    </p>
  </div>

   <div className="parent3">

    {/* STARTER */}
    <div className="div4">

      <h4 className="pricingType">Starter</h4>

      <h2 className="Price">
        0 <span>DA / Month</span>
      </h2>

      <p className="pricingType">
        Perfect for startups and small businesses.
      </p>

      <ul className="listPricing">
        <li><MdDone className="PricingIcone" /> Product Management</li>
        <li><MdDone className="PricingIcone" /> Categories Management</li>
        <li><MdDone className="PricingIcone" /> Inventory Tracking</li>
        <li><MdDone className="PricingIcone" /> Customers & Suppliers</li>
        <li><MdDone className="PricingIcone" /> Sales Dashboard</li>
        <li><MdDone className="PricingIcone" /> Basic Reports</li>
      </ul>

      <button className="submit-btn">
        Get Started
      </button>

    </div>

    {/* PROFESSIONAL */}

    <div className="div5" id="Pro_div">

      <h2 className="MostPopular">
        Most Popular
      </h2>

      <h4 className="pricingType">
        Professional
      </h4>

      <h2 className="Price">
        3 500 <span>DA / Month</span>
      </h2>

      <p className="pricingType">
        Everything you need to manage your growing business.
      </p>

      <ul className="listPricing">
        <li><MdDone className="PricingIcone" /> Everything in Starter</li>
        <li><MdDone className="PricingIcone" /> Task Management</li>
        <li><MdDone className="PricingIcone" /> Custom Workspaces</li>
        <li><MdDone className="PricingIcone" /> Human Resources (HR)</li>
        <li><MdDone className="PricingIcone" /> Employee Management</li>
        <li><MdDone className="PricingIcone" /> Leave Management</li>
        <li><MdDone className="PricingIcone" /> Team Collaboration</li>
        <li><MdDone className="PricingIcone" /> Advanced Analytics</li>
      </ul>

      <button className="submit-btn" >
        Upgrade Now
      </button>

    </div>

    {/* ENTERPRISE */}

    <div className="div6">

      <h4 className="pricingType">
        Enterprise
      </h4>

      <h2 className="Price">
        Custom
      </h2>

      <p className="pricingType">
        Tailored solutions for large organizations.
      </p>

      <ul className="listPricing">
        <li><MdDone className="PricingIcone" /> Everything in Professional</li>
        <li><MdDone className="PricingIcone" /> Accounting Dashboard</li>
        <li><MdDone className="PricingIcone" /> Financial Reports</li>
        <li><MdDone className="PricingIcone" /> Automatic Zakat Calculation</li>
        <li><MdDone className="PricingIcone" /> Multi-Branch Management</li>
        <li><MdDone className="PricingIcone" /> Custom Integrations</li>
        <li><MdDone className="PricingIcone" /> API Access</li>
        <li><MdDone className="PricingIcone" /> Dedicated Support 24/7</li>
      </ul>

      <button className="submit-btn">
        Contact Sales
      </button>

    </div>

  </div>
</div>
 
  )
}

export default Pricing
