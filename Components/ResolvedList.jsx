import React from "react";
import { toast } from "react-toastify"; // Import toast

export default function ResolvedList({ resolved }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Resolved Task</h2>
      {resolved.length === 0 ? (
        <p className="text-gray-500 text-sm">🕓 No resolved tasks yet. </p>
      ) : (
        <ul className="space-y-2">
          {resolved.map((task) => (
            <li
              key={task.id}
              className="bg-green-50 p-2 rounded-md text-green-700 text-sm font-medium flex items-center gap-2"
            >
              ✅ <span>{task.title}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Show toast when a task is resolved */}
      {resolved.length > 0 && toast.success("Task(s) resolved successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })}
    </section>
  );
}
