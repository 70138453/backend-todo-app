import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileUser from "./components/ProfileUser";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="flex justify-around p-4 bg-black">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          <Link to="/profile" className="text-blue-500 hover:underline">Profile</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileUser />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* Logout Component */
function Logout() {
  localStorage.clear(); // Clear local storage
  return <Navigate to="/login" />; // Redirect to login page
}
