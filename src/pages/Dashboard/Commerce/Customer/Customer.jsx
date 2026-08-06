import React, { useEffect, useState } from "react";
import "./Customer.css";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { RiVipCrownLine } from "react-icons/ri";
import Icon from "@ant-design/icons";
import { IoSearch } from "react-icons/io5";

function Customer() {
  const [customer, setCustomer] = useState([]);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);

  /* ========Getting all customers===== */

  const gettingcustomer = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:5001/customers/customer ",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCustomer(response.data.getALLcustomer);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingcustomer();
  }, [refresh]);

  /* ======= STAT========= */
  const VIPClient = customer.filter((customer) => customer.badge === "vip");
  const Totalclient = customer.length;

  return (
    <section className="customer">
      <div className="customer-header">
        <h2>Customers</h2>
        <p>Manage your customer base and their orders.</p>
      </div>
      <div className="customer-stat">
        <div className="customer-search">
          <IoSearch />
          <input type="text" placeholder="Search by name or wilaya..." />
        </div>
        <div className="customer-card-stat">
          
          <h2>{VIPClient.length}</h2>
          <p>VIP Clients</p>
        </div>
        <div className="customer-card-stat">
          <h2>{Totalclient}</h2>
          <p>Total Clients</p>
        </div>
      </div>

      {/* display customers */}
      <div className="customer-grid">
        {customer.map((customer) => {
          let color;
          if (customer.badge == "vip") {
            color = "orange";
          } else if (customer.badge == "regular") {
            color = "blue";
          } else {
            color = "green";
          }
          return (
            <div className="Customer-card" key={customer._id}>
              {/* IMAGE PRODUIT  */}
              <div className="customer-grid-header">
                <div className="customer-avatar">
                  {customer.name
                    .split(
                      " ",
                    ) /* transforme "Ahmed Benali" en ["Ahmed", "Benali"] */
                    .map((word) =>
                      word.charAt(0),
                    ) /* map(word => word.charAt(0)) → ["A", "B"] */
                    .slice(
                      0,
                      2,
                    ) /* garde seulement les deux premières initiales */
                    .join("") /* join("") → "AB" */
                    .toUpperCase()}{" "}
                  {/* toUpperCase() → "AB" */}
                </div>
                {/* CATEGORY BADGE */}
                <span className="customer-badge" style={{ color: color }}>
                  {customer.badge}
                </span>
              </div>
              {/* coordonnée */}
              <div className="customer-info">
                <ul>
                  <h3>{customer.name}</h3>
                  <li>
                    <HiOutlineMail /> {customer.email}
                  </li>
                  <li>
                    <FiPhone /> {customer.phone}
                  </li>
                  <li>
                    <IoLocationOutline /> {customer.wilaya}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Customer;
