import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./components/Videos"; // ✅ Correct Import
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faculties" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/videos" element={<Videos />} /> {/* ✅ Fixed */}
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
