import React from "react";

const TaskList = ({ tasks, stopTask }) => {
  return (
    <div className="task-div">
      <h2 className="task-h2">Scheduled Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task._id} className="task-li">
              <strong>{task.name}</strong> - {task.details} - {task.status}
              {task.status !== "Stopped" && (
                <button
                  onClick={() => stopTask(task._id)}
                  className="bg-black text-white p-2 rounded-xl ml-2"
                >
                  Stop
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No tasks scheduled yet.</p>
      )}
    </div>
  );
};

export default TaskList;
