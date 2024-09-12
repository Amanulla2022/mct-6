import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskLogs from "./components/TaskLogs";
import { getTasks } from "./api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    fetchTasks();
  }, [refresh]);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mt-4 underline">
        Task Scheduler
      </h1>
      <AddTaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
      <TaskLogs tasks={tasks} />
    </div>
  );
}

export default App;
