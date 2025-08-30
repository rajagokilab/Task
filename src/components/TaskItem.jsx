// TaskItem.jsx
import React from "react";

const TaskItem = ({ taskName, isCompleted, onMarkDone }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-xl mb-2">
      <span className={`text-lg ${isCompleted ? "line-through text-gray-500" : ""}`}>
        {taskName} {isCompleted ? "✅" : "❌"}
      </span>
      {!isCompleted && (
        <button
          onClick={onMarkDone}
          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Mark as Done
        </button>
      )}
    </div>
  );
};

export default TaskItem;
