import React from "react";

export default function TaskStatus({ tasks, onComplete }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Tasks</h2>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-sm">✨ No active tasks right now. Pick one from the list!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm"
            >
              <span className="text-sm font-medium text-gray-700">{task.title}</span>
              <button
                onClick={() => onComplete(task.id)}
                className="bg-green-500 text-white text-xs px-3 py-1 rounded-md hover:bg-green-600"
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
