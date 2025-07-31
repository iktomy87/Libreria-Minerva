import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../pages/styles/productos.css';

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get('/api/productos/');
        setProductos(response.data.productos || response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <div className="loading">Cargando productos...</div>;

  return (
    <div className="productos-section">
      <h2 className="section-title">NUEVO</h2>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {productos.map(producto => (
          <SwiperSlide key={producto.id}>
            <div className="product-card">
              <div className="product-image-container">
                {producto.imagen && (
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="product-image"
                  />
                )}
              </div>
              <div className="product-info">
                <h3 className="product-author">{producto.autor}</h3>
                <h4 className="product-name">{producto.nombre}</h4>
                <p className="product-price">${producto.precio.toLocaleString()}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    
  );
}

export default Productos;