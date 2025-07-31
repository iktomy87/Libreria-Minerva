import React from 'react';
import Productos from '../components/Productos';
import Trends from '../components/Trends';
import Presentacion from '../components/Presentacion';
import Slideshow from '../components/Slideshow';

function HomePage() {
  return (
    <div className="home-page">
      <Slideshow />
      <Presentacion />
      <Productos />
      <Trends />
    </div>
  );
}

export default HomePage;