import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import AddTaskModel from '../../../../components/task/AddTaskModel';

function TaskRh() {
  const [openTask, setOpenTask] = useState(false);
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);
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
          <button className="product-btn"  >
            <IoMdAdd />
            Create Task Space
          </button>
          
        </div>
      </div>
     </>
  )
}

export default TaskRh
