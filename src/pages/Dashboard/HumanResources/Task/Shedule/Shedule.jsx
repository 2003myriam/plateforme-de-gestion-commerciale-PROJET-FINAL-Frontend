import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import SheduleModel from "../../../../../components/SheduleModel/SheduleModel";

function Shedule() {
  const [openP, setOpenP] = useState(false);
  const handleOpenShedule = () => setOpenP(true);
  const handleCloseShedule = () => setOpenP(false);
  const [shedule, setShedule] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hours = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];

  /* ================================== */
  /* ========Getting all sheduls===== */
  /* =============================== */
  const gettinshedule = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "http://localhost:5001/shedules/shedule",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setShedule(response.data.getALLshedule);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettinshedule();
  }, [refresh]);

  return (
    <>
      <div className="products-header">
        <div className="products-text">
          <h2>Team schedule</h2>
          <p>Organize the time slots and rotations.</p>
        </div>

        <div className="product-2btn">
          <button className="product-btn" onClick={handleOpenShedule}>
            <IoMdAdd />
            Add Schedule
          </button>
          {openP && <SheduleModel onClose={handleCloseShedule} />}
        </div>
      </div>
      {/* ===================================================== */}
      {/* =============Display tasks===================== */}
      {/* ===================================================== */}
      <table>
        <tr>
          <th>Hour</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
        <tbody>
  {hours.map((hour) => (
    <tr key={hour}>
      <td>{hour} - {parseInt(hour) + 1}:00</td>

      {days.map((day) => (
        <td key={day}> {shedule.assignTo}</td>
      ))}
    </tr>
  ))}
</tbody>
      </table>
    </>
  );
}

export default Shedule;
