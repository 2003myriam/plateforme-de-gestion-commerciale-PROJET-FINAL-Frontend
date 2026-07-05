import axios from "axios";
import React, { useEffect, useState } from "react";

function SheduleModel({ onClose }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [planning, setPlanning] = useState({
    weekStart: "",
    weekEnd: "",
    schedule: [],
    note: "",
  });

  const [schedule, setSchedule] = useState({
    day: "",
    startTime: "",
    endTime: "",
  });
  const [note, setNote] = useState("");
   
  const [assignedTo, setAssignedTo] = useState("");
  const [allUser, setAllUser] = useState([]);
  const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

  /* ======================= */
  /* =======ADD Shedule===== */
  /* ======================= */
  const addshedule = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:5001/shedules/shedule",
        {
          weekStart: planning.weekStart,
          weekEnd: planning.weekEnd,
          schedule: [schedule],
          note: planning.note,
          assignTo: assignedTo,
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
  /* ===========GET ALL USER========== */
  const gettingUsers = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:5001/user/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAllUser(response.data.data);
    } catch (error) {
      setError(error?.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingUsers();
  }, []);
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Add Shedule</h2>

        <input
          type="date"
          className="modal-input"
          value={planning.weekStart}
          onChange={(e) =>
            setPlanning({
              ...planning,
              weekStart: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="modal-input"
          value={planning.weekEnd}
          onChange={(e) =>
            setPlanning({
              ...planning,
              weekEnd: e.target.value,
            })
          }
        />
        <select
          onChange={(e) => setAssignedTo(e.target.value)}
          className="modal-input"
        >
          <option value="">Assign To</option>
          {allUser.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <select
          className="modal-input"
          value={schedule.day}
          onChange={(e) => setSchedule({ ...schedule, day: e.target.value })}
        >
       <option value="">Choose a day</option>

  {days.map((day) => (
    <option key={day} value={day}>
      {day.charAt(0).toUpperCase() + day.slice(1)}
    </option>
  ))}
        </select>
        <input
          type="time"
          className="modal-input"
          value={schedule.startTime}
          onChange={(e) =>
            setSchedule({ ...schedule, startTime: e.target.value })
          }
        />
        <input
          type="time"
          className="modal-input"
          value={schedule.endTime}
          onChange={(e) =>
            setSchedule({ ...schedule, endTime: e.target.value })
          }
        />
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="modal-actions">
          <button className="btn-add" onClick={addshedule}>
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

export default SheduleModel;
