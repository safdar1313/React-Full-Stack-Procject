import React, { useState } from "react";
import Breadcrumb from "../dynamic-components/Breadcrumb";
import { px } from "framer-motion";
function Blogs() {
  const [Task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  function handleAddTask(e) {
    e.preventDefault(); // Prevents page refresh
    if (Task.trim() !== "") {
      setAddTask(prevTasks => [...prevTasks, Task]); // Using functional update
      setTask(""); // Reset input after adding task
    }
  }

  function removeTask(index) {
    setAddTask(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className="blogs w-full">
       <Breadcrumb title={"Our Latest Blogs"}/>
      <div className="container mx-auto p-6 blogs pt-[60px]">
        <h1 className="text-xl font-bold">To-Do List</h1>
        {/* Input & Add Task Button */}
        <form onSubmit={handleAddTask} className="flex gap-2 my-4">
          <input 
            type="text"
            placeholder="Write Your Daily Task..."
            value={Task}
            onChange={(e) => setTask(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Task
          </button>
        </form>

        {/* Task List */}
        <ul className="space-y-2">
          {addTask.map((t, index) => (
            <li key={index} className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
              <span>{t}</span>
              <button onClick={() => removeTask(index)} className="bg-red-500 text-white px-3 py-1 rounded-md">
                Remove
              </button>
            </li>
          ))}
        </ul>
        <marquee width="100%" direction="up" height="200px" scrollamount='4' behavior='alternate'>
          <img src="/React-Full-Stack-Procject/logo.png" alt="logo" width={100}/>
        </marquee>
      </div>
    </div>
  );
}

export default Blogs;
