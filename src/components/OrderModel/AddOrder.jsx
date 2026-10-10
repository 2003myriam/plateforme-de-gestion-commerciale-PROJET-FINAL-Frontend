import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddOrder.css"

function AddOrder({ onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("");
  const [canal, setCanal] = useState("");
  const [paiement, setPaiement] = useState("");
  // Liste de tous les produits récupérés de l'API
  const [allProducts, setAllProducts] = useState([]);
  // Produits qui feront partie de la commande
  const [orderProducts, setOrderProducts] = useState([]);
  // Produit actuellement sélectionné dans le <select>
  const [selectproduct, setSelectProduct] = useState("");
  const [customer, setCustomer] = useState([]); // liste API
  const [quantity, setQuantity] = useState(1);

  const statusOptions = [
    { value: "pending", label: "pending" },
    { value: "in_progress", label: "in_progress" },
    { value: "delivered", label: "delivered" },
  ];

  const paiementOptions = [
    { value: "card", label: "card" },
    { value: "cash", label: "cash" },
  ];

  const canalOptions = [
    { value: "instagram", label: "instagram" },
    { value: "website", label: "website" },
    { value: "whatsapp", label: "whatsapp" },
    { value: "website", label: "website" },
    { value: "store", label: "store" },
  ];

  /* ======================= */
  /* =======ADD ORDER===== */
  /* ======================= */
  const addorder = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/orders/order",
        {
          clientId,
          status,
          canal,
          paiement,
          products: orderProducts,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // ✅ SUCCESS
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };
  /* ======================= */
  /* ======= Get Customer===== */
  /* ======================= */
  const gettingCustomers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "http://localhost:5001/customers/customer",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCustomer(response.data.data);
      // ✅ SUCCESS
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };
  /* ======================= */
  /* ======= Get Product===== */
  /* ======================= */
  const gettingProducts = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "https://plateforme-de-gestion-commerciale-projet-8pwf.onrender.com/products/product",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setAllProducts(response.data.data);
      // ✅ SUCCESS
      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
      setSuccess("");
    }
  };
  useEffect(() => {
    gettingCustomers();
    gettingProducts();
  }, []);

  {/* =========  function to add prodcut order============= */ }
  const addProductToOrder = () => {
    setOrderProducts(prevList => [...prevList,
    {
      productId: selectproduct,
      quantity: quantity
    }
    ]);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Order</h2>
        {/* ========= customers============= */}
        <select
          onChange={(e) => setClientId(e.target.value)}
          className="modal-input"
        >
          <option value="">Select customer</option>
          {customer.map((cust) => (
            <option key={cust._id} value={cust._id}>
              {cust.name} ____ {cust.phone}
            </option>
          ))}
        </select>
        {/* ======= status=========== */}
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="modal-input"
        >
          <option value="">Select status</option>
          {statusOptions.map((st) => (
            <option key={st.label} value={st.label}>
              {st.value}
            </option>
          ))}
        </select>
        {/* ======= paiement =========== */}
        <select
          onChange={(e) => setPaiement(e.target.value)}
          className="modal-input"
        >
          <option value="">Select Paiement</option>
          {paiementOptions.map((p) => (
            <option key={p.label} value={p.label}>
              {p.value}
            </option>
          ))}
        </select>
        {/* ======= canal =========== */}
        <select
          onChange={(e) => setCanal(e.target.value)}
          className="modal-input"
        >
          <option value="">Select Canal</option>
          {canalOptions.map((c) => (
            <option key={c.label} value={c.label}>
              {c.value}
            </option>
          ))}
        </select>
        {/* ======= affichage des produit de la mem commande ====== */}
        <div className="order-items">
          <h2>Order items</h2>
         {/* ======= affichage de tous les produits ====== */}
          <div className="order-item-form">
            <select
              onChange={(e) => setSelectProduct(e.target.value)}
              className="modal-input"
            >
              <option value="">Select Product</option>
              {allProducts.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.title}
                </option>
              ))}
            </select>
          {/* ======= affichage de  la quantité ====== */}
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          
            <button
              className="btn-item-add"
              onClick={addProductToOrder}
            >
              ADD
            </button>
          </div>

          <div className="order-list">
            {orderProducts.map((item, index) => (
              <div className="order-card" key={index}>
                <p>Produit : {item.productId}</p>
                <p>Quantité : {item.quantity}</p>
              </div>
            ))}
          </div>
        </div>

        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="btn-add" onClick={addorder}>
            ADD
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
