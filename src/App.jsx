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
  };

  const handleComplete = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [...prev, { ...task, status: "Resolved" }]);
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  // Create the fetch promise for IssuesManagement component
  const fetchPromise = fetchIssues();

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
    </div>
  );
}
