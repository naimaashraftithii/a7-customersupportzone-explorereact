import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Banner from "../Components/Banner.jsx";
import TicketList from "../Components/TicketList.jsx";
import TaskStatus from "../Components/TaskStatus.jsx";
import ResolvedList from "../Components/ResolvedList.jsx";
import Footer from "../Components/Footer.jsx";
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
    if (tasks.some((t) => t.id === ticket.id)) {
      toast.info("⚡ Ticket already in progress!");
      return;
    }
    setTasks((prev) => [...prev, { ...ticket, status: "In-Progress" }]);
    toast.success(`🎉 Ticket "${ticket.title}" added to Task Status`);
  };

  const handleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    setTasks((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [...prev, { ...task, status: "Resolved" }]);
    setTickets((prev) => prev.filter((t) => t.id !== id));

    toast.success(`✅ Task "${task.title}" marked as Resolved`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Container>
        <Banner stats={{ inProgress: tasks.length, resolved: resolved.length }} />
      </Container>

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

      <Footer />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}
