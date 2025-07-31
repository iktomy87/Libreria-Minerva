import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Asegúrate que sea export default
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Productos from './components/Productos';
import Footer from './components/Footer';
import Presentacion from './components/Presentacion';
import './pages/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Slideshow />
        <Presentacion />
        
        <Routes>
          <Route path="/" element={<Productos />} />
          {/* Otras rutas aquí */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;