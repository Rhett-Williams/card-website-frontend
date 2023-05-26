import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import PaymentComplete from './pages/PaymentComplete';
import Navbar from './components/NavBar';
import './App.css'

const App: React.FC = () => {
  const isAuthenticated = false; // Replace with your authentication logic

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          {isAuthenticated ? (
            <Route path="/payment-complete" element={<PaymentComplete />} />
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </Router>
  );
};

export default App;