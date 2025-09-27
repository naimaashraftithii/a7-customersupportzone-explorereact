import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../Components/Navbar.jsx";
import Banner from "../Components/Banner.jsx";
import TicketList from "../Components/TicketList.jsx";
import TaskStatus from "../Components/TaskStatus.jsx";
import ResolvedList from "../Components/ResolvedList.jsx";
import Footer from "../Components/Footer.jsx";
import ticketData from "../public/tickets.json";
import Container from "../Components/Container";  // Import Container
import Loading from "../Components/Loading.jsx";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

// Async function to fetch issues data
const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  // Fetch tickets on mount
  useEffect(() => {
    setTickets(ticketData);
  }, []);

  const handlePick = (ticket) => {
    if (tasks.some((t) => t.id === ticket.id)) return;
    setTasks((prev) => [...prev, { ...ticket, status: "In-Progress" }]);
    // Show toast when a task is picked
    toast.info(`Task "${ticket.title}" added to In-Progress!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [...prev, { ...task, status: "Resolved" }]);
    setTickets((prev) => prev.filter((t) => t.id !== id));
    // Show toast when a task is completed
    toast.success(`Task "${task.title}" marked as completed!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  // Create the fetch promise for IssuesManagement component
  const fetchPromise = fetchIssues();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Banner inside 10/12 width */}
      <Container>
        <Banner stats={{ inProgress: tasks.length, resolved: resolved.length }} />
      </Container>

      {/* Main content wrapped inside Container */}
      <Container>
        <Suspense fallback={<Loading />}>
          <TicketList tickets={tickets} onPick={handlePick} />
        </Suspense>
      </Container>

      {/* Task Status and Resolved List */}
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

      {/* Footer */}
      <Container>
        <Footer />
      </Container>

      {/* ToastContainer renders toasts */}
      <ToastContainer />
    </div>
  );
}
