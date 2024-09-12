import { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import TaskLogs from "./components/TaskLogs";
import { getTasks, stopTask } from "./api";
import { toast, ToastContainer } from "react-toastify";
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

  const handleStopTask = async (taskId) => {
    try {
      await stopTask(taskId);
      toast.success("Task stopped successfully!");
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? { ...task, status: "Stopped" } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error stopping task:", error.message);
      toast.error("Error stopping task");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mt-4 underline">
        Task Scheduler
      </h1>
      <AddTaskForm onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} stopTask={handleStopTask} />
      <TaskLogs tasks={tasks} />
    </div>
  );
}

export default App;
