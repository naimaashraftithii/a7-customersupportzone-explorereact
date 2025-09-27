import React from "react";
import TicketCard from "./TicketCard";

export default function TicketList({ tickets, onPick }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Customer Tickets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {tickets.length === 0 ? (
          <p className="text-gray-500">......<br/>
          Loading Tickets......!!! <br/> wait....
          </p>
        ) : (
          tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onPick={onPick} />
          ))
        )}
      </div>
    </section>
  );
}
