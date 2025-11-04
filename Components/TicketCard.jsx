import React from "react";

export default function TicketCard({ ticket, onPick }) {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  // Status Badge 
const getStatusBadge = () => {
  switch (status) {
    case "Open":
      return (
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#B9F8CF] text-[#0B5E06] flex items-center gap-1">
          <img src="/green.png" className="w-4 h-4 rounded-full object-cover" alt="Open" />
          Open
        </span>
      );
    case "In-Progress":
      return (
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#F8F3B9] text-yellow-700 flex items-center gap-1">
          <img src="/orange.png" className="w-4 h-4 rounded-full object-cover" alt="In Progress" />
          In-Progress
        </span>
      );
    default:
      return (
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 border border-gray-400 text-gray-700">
          {status}
        </span>
      );
  }
};


  // Color of priority list
  const getPriorityColor = () => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      default:
        return "text-green-600";
    }
  };

  return (
    <div
      onClick={() => onPick(ticket)}
      className="cursor-pointer bg-white border border-gray-200 rounded-lg p-4 py-7 shadow-md hover:shadow-lg transition-all flex flex-col justify-between h-48 w-full"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        {getStatusBadge()}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 mt-2 line-clamp-2">{description}</p>

      {/* Footer */}
      <div className="mt-auto">
        <div className="flex justify-between items-center text-xs text-gray-600 mt-3">
          {/* Left side */}
          <span className="flex gap-2">
            <span className="font-medium text-gray-500">#{id}</span>
            <span className={`font-semibold ${getPriorityColor()}`}>
              {priority.toUpperCase()} PRIORITY
            </span>
          </span>

          {/* Right side */}
          <span className="flex gap-3 items-center">
            <span>👤 {customer}</span>
            <span>🗓 {new Date(createdAt).toLocaleDateString()}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
