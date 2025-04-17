import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
