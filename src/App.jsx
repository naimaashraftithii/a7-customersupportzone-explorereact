import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import TicketList from "../Components/TicketList";
import TaskStatus from "../Components/TaskStatus";
import ResolvedList from "../Components/ResolvedList";
import Footer from "../Components/Footer";
import ticketData from "../public/tickets.json";
import Container from "../Components/Container";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    setTickets(ticketData);
  }, []);

  const handlePick = (ticket) => {
    if (tasks.some((t) => t.id === ticket.id)) return;
    setTasks(prev => [...prev, { ...ticket, status: "In-Progress" }]);
    toast.info(`Ticket "${ticket.title}" added to In-Progress!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleComplete = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    // Remove task from in-progress
    setTasks(prev => prev.filter(t => t.id !== id));

    // Add task to resolved
    setResolved(prev => [...prev, { ...task, status: "Resolved" }]);

    // Remove task from tickets
    setTickets(prev => prev.filter(t => t.id !== id));

    // Showing toast
    toast.success(`Task "${task.title}" marked as completed!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner section */}
      <Container>
        <Banner stats={{ inProgress: tasks.length, resolved: resolved.length }} />
      </Container>

      {/* Main section */}
      <Container>
        <main className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2">
            <TicketList tickets={tickets} onPick={handlePick} />
          </div>
          <div className="space-y-6">
            <TaskStatus tasks={tasks} onComplete={handleComplete} />
            <ResolvedList resolved={resolved} />
          </div>
        </main>
      </Container>

      {/* Footer Section */}
      <Container>
        <Footer />
      </Container>

      <ToastContainer />
    </div>
  );
}
