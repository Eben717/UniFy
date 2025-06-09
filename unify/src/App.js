// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/frontend/Login';
import Homepage from './components/frontend/Homepage';
import Dashboard from './components/frontend/Dashboard';
import Finance from './components/frontend/Finance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
  );
}

export default App;
