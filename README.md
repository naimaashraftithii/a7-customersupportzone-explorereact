
# 🎫 CS — Ticket System

CS — Ticket System is a modern, responsive web application for managing customer support tickets.  
Agents can view tickets, track their status, and mark tasks as completed in a clean and intuitive UI.

---

## 🧾 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots  Demo](#-screenshots--demo)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
  - [Deploy to Vercel](#deploy-to-vercel)
  - [Deploy to Netlify](#deploy-to-netlify)
- [React  Tailwind Q&A](#-react--tailwind-qa)
- [Contact](#-contact)

---

## 📌 About

CS — Ticket System is a front-end project built with **React** and **Tailwind CSS**.  
The goal is to simulate a customer support dashboard where tickets can be:

- Displayed in a list
- Filtered by status (Open / In-Progress / Resolved)
- Added to a personal task list
- Marked as completed

This project focuses on:

- Component-based UI design
- State management with React
- Reusable UI components (cards, lists, navbar, stats banner)
- Basic UX patterns like loaders and toasts

---

## ✅ Features

- 📋 **Ticket List**  
  Show customer tickets with title, description, customer name, priority, status, and created date.

- 🏷 **Status Badges**  
  Visual status badges for:
  - Open  
  - In-Progress  
  - Resolved  

- 📊 **Dashboard Banner**  
  Summary banner showing:
  - In-Progress ticket count  
  - Resolved ticket count  

- ✅ **Task Status & Completion**  
  - Move tickets into a “Task Status” list  
  - Mark tasks as completed  
  - Show toast notification (`react-toastify`) on completion

- 📚 **Resolved Tasks List**  
  - Separate section for tasks that have been completed

- 🧭 **Responsive Navbar**  
  - Desktop navigation with links (Home, FAQ, Changelog, Blog, Download, Contact)  
  - Mobile dropdown menu with “New Ticket” button

- 🚀 **Reusable Components**  
  - `Navbar`
  - `Footer`
  - `Container`
  - `TicketCard`
  - `TicketList`
  - `TaskStatus`
  - `ResolvedList`
  - `Banner`
  - `Loading`

---

## 💻 Tech Stack

**Frontend**

- ⚛️ React
- ⚡ Vite (recommended build tool)
- 🎨 Tailwind CSS
- 🔔 React Toastify (`react-toastify`)
- 🎭 React Icons (`react-icons`)

**Styling**

- Utility-first styling with Tailwind classes  
- Custom loader using CSS `@keyframes`  

**Recommended Hosting**

- Vercel  
- Netlify  
- GitHub Pages (via `npm run build` and deploying `/dist`)

---

## 📸 Screenshots / Demo

<!-- Typing SVG -->
<p align="center">
  <img src="" />
</p>


Example:

- `![Dashboard Screenshot](./screenshots/dashboard.png)`
- `![Ticket List](./screenshots/tickets.png)`

---

## 🏁 Getting Started

### ✅ Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) (LTS recommended)  
- npm or yarn

Check versions:

```bash
node -v
npm -v
````

### 📥 Installation

1️⃣ **Clone the repository**

```bash
git clone https://github.com/your-username/cs-ticket-system.git
cd cs-ticket-system
```

2️⃣ **Install dependencies**

```bash
npm install
# or
yarn
```

### ▶ Running the Project

For development (with hot reload):

```bash
npm run dev
# or
yarn dev
```

By default Vite runs at:

```text
http://localhost:5173
```

For production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

---

## 📂 Project Structure

Example structure based on your components:

```bash
src/
  assets/
    vector1.png
    # other images (green.png, orange.png, etc.)
  components/
    Banner.jsx
    Container.jsx
    Footer.jsx
    Loading.jsx
    Navbar.jsx
    TicketCard.jsx
    TicketList.jsx
    TaskStatus.jsx
    ResolvedList.jsx
  pages/
    # Your main page(s) that use the components above
  App.jsx
  main.jsx
  index.css
  ...
```

* **`Banner.jsx`** – shows In-Progress and Resolved stats with gradient cards
* **`TicketCard.jsx`** – individual ticket UI (status badge, priority, meta info)
* **`TicketList.jsx`** – grid layout of tickets
* **`TaskStatus.jsx`** – active tasks & “Complete” button with toast notification
* **`ResolvedList.jsx`** – list of completed tasks
* **`Navbar.jsx`** – responsive top navigation bar
* **`Footer.jsx`** – footer with company links and social icons
* **`Loading.jsx`** – circular spinner component

---

## 🚀 Deployment

You can deploy the built React app anywhere that serves static files.
Below are two common options.

### Deploy to Vercel

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Install Vercel CLI (optional but useful)**

   ```bash
   npm install -g vercel
   ```

3. **From the project root, run:**

   ```bash
   vercel
   ```

4. Follow the Terminal instructions:

   * Link or create a project
   * Vercel will detect this is a Vite + React app
   * It will use `npm run build` by default

5. Your app will be available at a Vercel URL like:

   ```text
   https://cs-ticket-system.vercel.app
   ```

You can also:

* Push your project to GitHub
* Connect the repo directly in the Vercel dashboard
* Vercel will deploy on every push to `main` (or your chosen branch)

### Deploy to Netlify

1. **Build the project**

   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/) and choose **“Add new site” → “Deploy manually”**.

3. Drag and drop the `dist` folder into the Netlify deploy box
   (or connect your Git repo and set build command & publish dir):

   * **Build command:** `npm run build`
   * **Publish directory:** `dist`

4. Netlify will give you a live URL like:

   ```text
   https://cs-ticket-system.netlify.app
   ```

---

## 🧠 React & Tailwind Q&A

### 1️⃣ Why use components like `TicketCard` and `TicketList`?

* Components let you **reuse UI blocks** and keep your code organized.
* `TicketList` only cares about the array of tickets.
* `TicketCard` only cares about **how** a single ticket looks.
* This separation makes your app easier to scale and maintain.

---

### 2️⃣ What is the benefit of Tailwind CSS here?

* Tailwind allows you to style using **utility classes** directly in JSX:

  ```jsx
  <div className="bg-white p-4 rounded-lg shadow-md">
  ```
* No need to write separate CSS for common patterns.
* Great for building **dashboards and admin panels** quickly.

---

### 3️⃣ How does `react-toastify` help?

In your `TaskStatus` component you do something like:

```jsx
toast.success(`Task "${task.title}" marked as completed!`, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 3000,
});
```

* It gives **instant feedback** to the user when an action is successful.
* Makes the UI feel more interactive and friendly.

---

### 4️⃣ How can I manage tickets data?

A few options:

* **Local state** with `useState` or `useReducer` for simple apps
* **Context API** if multiple components need access
* Later, you can connect it to a **backend API** (Node, Express, etc.) and fetch real tickets.

---

## 📬 Contact

* **Author:** *Your Name Here*
* **Email:** [your.email@example.com](mailto:your.email@example.com)
* **GitHub:** [https://github.com/your-username](https://github.com/your-username)

Feel free to fork, modify, and experiment with the project.
If you add a backend (like Node/Express, MongoDB, etc.), you can easily turn this into a full ticketing platform. 🎯

```

If you tell me your actual GitHub repo URL and where you’ll host (Vercel / Netlify), I can tweak the README with your real links and commands.
```
