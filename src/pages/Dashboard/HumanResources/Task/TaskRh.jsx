import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddTaskModel from "../../../../components/task/AddTaskModel";
import axios from "axios";
import { FaTrashCan } from "react-icons/fa6";
import "./TaskRh.css";

function TaskRh() {
  const [openTask, setOpenTask] = useState(false);
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);

  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  /* =========================== */
  /* ==========getting tasks======== */
  /* ============================ */
  const gettingTasks = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5001/tasks/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data.getTask);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };
  useEffect(() => {
    gettingTasks();
  }, []);

  /* ================================== */
  /* ======== delete task===== */
  /* =============================== */
  const deletetask = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        `http://localhost:5001/tasks/task/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setTasks((prev) => prev.filter((p) => p._id !== id));
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Server error");
    }
  };

  /* ========available status==== */
  const todoTasks = tasks.filter((task) => task.status === "to_do");
  const inProgressTasks = tasks.filter((task) => task.status === "in_progress");
  const finishedTasks = tasks.filter((task) => task.status === "finished");

  return (
    <>
      <div className="products-header">
        <div className="products-text">
          <h2>Task allocation</h2>
          <p>Follow the progress of the team's projects.</p>
        </div>
        {/* ===================================================== */}
        {/* =====NEW TASK AND PERSONNEL TASK BUTTON============= */}
        {/* ===================================================== */}
        <div className="product-2btn">
          <button className="product-btn" onClick={handleOpenTask}>
            <IoMdAdd />
            New task
          </button>
          {openTask && <AddTaskModel onClose={handleCloseTask} />}
        </div>
      </div>
      {/* ===================================================== */}
      {/* =============Display tasks===================== */}
      {/* ===================================================== */}
      <div className="kanban">
        {/* ================= TO DO ================= */}
        <div className="kanban-column" >
          <div className="kanban-header">
            <h3>To do</h3>
            <span>{todoTasks.length}</span>
          </div>

          {todoTasks.map((task) => (
            <div
              className="kanban-card"
              key={task._id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task._id);
              }}
            >
              <div className="card-top">
                <h4>{task.title}</h4>
                <span className={`badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>

              <p className="card-desc">{task.description}</p>

              <div className="card-bottom">
                <div className="user">
                  <div className="avatar">
                    {task.assignedTo.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span>{task.assignedTo.name}</span>
                </div>

                <span className="date">{new Date(task.createdAt).toLocaleDateString()}</span>
                <FaTrashCan
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => deletetask(task._id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= IN PROGRESS ================= */}
        <div className="kanban-column"  >
          <div className="kanban-header">
            <h3>In progress</h3>
            <span>{inProgressTasks.length}</span>
          </div>

          {inProgressTasks.map((task) => (
            <div
              className="kanban-card"
              key={task._id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task._id);
              }}
            >
              <div className="card-top">
                <h4>{task.title}</h4>
                <span className={`badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>

              <p className="card-desc">{task.description}</p>

              <div className="card-bottom">
                <div className="user">
                  <div className="avatar">
                    {task.assignedTo?.name?.slice(0, 2).toUpperCase()}
                  </div>
                  <span>{task.assignedTo?.name}</span>
                </div>

                <span className="date">{task.createdAt?.slice(0, 10)}</span>
                <FaTrashCan
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => deletetask(task._id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= FINISHED ================= */}
        <div className="kanban-column"  >
          <div className="kanban-header">
            <h3>Finished</h3>
            <span>{finishedTasks.length}</span>
          </div>

          {finishedTasks.map((task) => (
            <div
              className="kanban-card"
              key={task._id}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task._id);
              }}
            >
              <div className="card-top">
                <h4>{task.title}</h4>
                <span className={`badge ${task.priority}`}>
                  {task.priority}
                </span>
              </div>

              <p className="card-desc">{task.description}</p>

              <div className="card-bottom">
                <div className="user">
                  <div className="avatar">
                    {task.assignedTo?.name?.slice(0, 2).toUpperCase()}
                  </div>
                  <span>{task.assignedTo?.name}</span>
                </div>

                <span className="date">{task.createdAt?.slice(0, 10)}</span>
                <FaTrashCan
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => deletetask(task._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskRh;
