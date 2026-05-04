import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StyleSelector from './pages/StyleSelector';
import Visualizer from './pages/Visualizer';
import CustomUpload from './pages/CustomUpload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styles/:style" element={<StyleSelector />} />
        <Route path="/visualizer" element={<Visualizer />} />
        <Route path="/upload" element={<CustomUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
