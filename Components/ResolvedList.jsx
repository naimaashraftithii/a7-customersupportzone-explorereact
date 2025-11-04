import React from "react";
import { toast } from "react-toastify"; 
export default function ResolvedList({ resolved }) {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Resolved Tasks</h2>
      {resolved.length === 0 ? (
        <p className="text-gray-500 text-sm">🕓 No resolved tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {resolved.map((task) => (
            <li key={task.id} className="bg-green-50 p-2 rounded-md text-green-700 text-sm font-medium">
              ✅ {task.title}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

