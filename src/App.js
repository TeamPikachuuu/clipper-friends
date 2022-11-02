import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Entry from './components/Entry'
import Search from './components/Search'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const app = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/entry' element={<Entry />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
  );
};

export default app;
