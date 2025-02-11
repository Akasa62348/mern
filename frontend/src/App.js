// Import necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Login from './components/Login'; // Add this if you have a Login component
import Register from './components/Register'; // Add this if you have a Register component

// Main App component
function App() {
  return (
    <Router>
      {/* Navigation bar (visible on all pages) */}
      <Navbar />

      {/* Define routes for different pages */}
      <Routes>
        {/* Home page - displays the list of products */}
        <Route path="/" element={<ProductList />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Register page */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

// Export the App component
export default App;