import React from "react";
import { toast } from "react-toastify";

export default function TaskStatus({ tasks, onComplete }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Status</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-sm">🎯 Select a ticket to add to Task Status</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm"
            >
              <span className="text-sm font-medium text-gray-700">{task.title}</span>
              <button
                type="button" 
                onClick={() => {
                  onComplete(task.id); 
                  toast.success(`Task "${task.title}" marked as completed!`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                  });
                }}
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
