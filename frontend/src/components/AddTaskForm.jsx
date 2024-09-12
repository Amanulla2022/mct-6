import React, { useState } from "react";
import { addTask } from "./../api";
import { toast } from "react-toastify";

const AddTaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    name: "",
    details: "",
    frequency: "",
    recipientEmail: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !task.name &&
      !task.details &&
      !task.frequency &&
      !task.recipientEmail
    ) {
      toast.error("Please fill all the details!");
      return;
    }

    if (!task.name) {
      toast.error("Please enter task name!");
      return;
    }

    if (!task.details) {
      toast.error("Please enter task details!");
      return;
    }

    if (!task.frequency) {
      toast.error("Please enter frencuency as shown in place holder!");
      return;
    }

    if (!task.recipientEmail) {
      toast.error("Please enter valid emailId!");
      return;
    }

    try {
      await addTask(task);
      onTaskAdded();
      toast.success("Task added successfully!");
      setTask({ name: "", details: "", frequency: "", recipientEmail: " " });
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("Failed to add task", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 p-4 border-2 rounded-lg shadow-lg"
    >
      <div>
        <label className="block text-gray-700">Task Name:</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Enter Task Title"
          required
          className="form-input"
        />
      </div>
      <div>
        <label className="block text-gray-700">Task Deatails:</label>
        <input
          type="text"
          name="details"
          value={task.details}
          onChange={handleChange}
          placeholder="Enter Task Details"
          required
          className="form-input"
        />
      </div>
      <div>
        <label className="block text-gray-700">Frequency (Cron Format):</label>
        <input
          type="text"
          name="frequency"
          value={task.frequency}
          onChange={handleChange}
          placeholder="e.g. * * * * *"
          required
          className="form-input"
        />
      </div>
      <div>
        <label className="block text-gray-700">Reciepent EmailId:</label>
        <input
          type="eamil"
          name="recipientEmail"
          value={task.recipientEmail}
          onChange={handleChange}
          placeholder="Enter Valid EmailId!"
          required
          className="form-input"
        />
      </div>
      <button
        type="submit"
        className="w-1/4 md:w-1/3 text-lg rounded-xl p-2 mt-4 text-white bg-black"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
