import React from "react";

const TaskLogs = ({ tasks }) => {
  return (
    <div className="task-div">
      <h2 className="task-h2">Task Logs</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task._id} className="task-li">
              <strong>{task.name}</strong> - Last Executed:{" "}
              {task.lastExecuted
                ? new Date(task.lastExecuted).toLocaleString()
                : "Not executed yet"}{" "}
              - Status: {task.status}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No task logs available yet!</p>
      )}
    </div>
  );
};

export default TaskLogs;
