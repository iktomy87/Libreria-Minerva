import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Asegúrate que sea export default
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import './pages/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Nosotros />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;