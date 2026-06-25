import React, { useEffect, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AddPersonnelTask from '../../../../components/task/AddPersonnelTaskModel';
import "./PersonnelTask.css"
import axios from 'axios';
import { FaTrashCan } from "react-icons/fa6";
import "./TaskRh.css";
import { FaBoxArchive } from "react-icons/fa6";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BiLoaderAlt } from "react-icons/bi";


function PersonnelTask() {
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
      const response = await axios.get("http://localhost:5001/persotasks/persotask", {
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
        `http://localhost:5001/persotasks/persotask/${id}`,
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
         <h2>My Tasks</h2>
         <p>Track and organize your personal work assignments.</p>
        </div>
        
        {/* ===================================================== */}
        {/* =====NEW TASK AND PERSONNEL TASK BUTTON============= */}
        {/* ===================================================== */}
        <div className="product-2btn">
          <button className="product-btn" onClick={handleOpenTask}>
             <IoMdAdd />
            Create Task Space
          </button>
          {openTask && <AddPersonnelTask onClose={handleCloseTask} />}
        </div>
      </div>

     {/* ===================================================== */}
{/* =============Display tasks===================== */}
{/* ===================================================== */}
<div className="stats-container">

  <div className="stats-card total">
    <FaBoxArchive className="icon-stat" />
    <div className="stats-info">
      <h2>{tasks.length}</h2>
      <p>Total</p>
    </div>
  </div>

  <div className="stats-card todo">
    
    <FaRegHourglassHalf  className="icon-stat"/>
    <div className="stats-info">
      <h2>{todoTasks.length}</h2>
      <p>To do</p>
    </div>
  </div>

  <div className="stats-card progress">
    <BiLoaderAlt  className="icon-box total-icon"/>
    <div className="stats-info">
      <h2>{inProgressTasks.length}</h2>
      <p>In Progress</p>
    </div>
  </div>

  <div className="stats-card finished">
   <MdOutlineDoneOutline  className="icon-box total-icon" />
    <div className="stats-info">
      <h2>{finishedTasks.length}</h2>
      <p>Finished</p>
    </div>
  </div>

</div>

<div className="personal-tasks-container">
  {tasks.map((task) => (
    <div className="personal-task-card" key={task._id}>
      
      <div className="task-card-header">
        <h2 className="task-title">{task.title}</h2>

        <div className="task-badges">
          <span className={`task-priority ${task.priority}`}>
            {task.priority}
          </span>

          <span className={`task-status ${task.status}`}>
            {task.status.replace("_", " ")}
          </span>
        </div>
      </div>

      <div className="task-card-body">
        <p>{task.description}</p>
      </div>

      <div className="task-card-footer">
        <div className="task-info">
          <span>
            Deadline :
             { new Date(task.deadline).toLocaleDateString()
              }
          </span>
        </div>
       

        <div className="task-info">
          <span>
            Created :
            {new Date(task.createdAt).toLocaleDateString()}
          </span>
        </div>
        <FaTrashCan
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => deletetask(task._id)}
                        /> 
      </div>
      

    </div>
  ))}
</div>


      
    </>
  )
}

export default PersonnelTask
