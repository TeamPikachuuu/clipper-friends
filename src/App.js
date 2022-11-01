import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const app = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default app;
