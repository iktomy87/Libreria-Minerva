import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../pages/styles/productos.css';

function Trends() {
  const [trendProducts, setTrendProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendProducts = async () => {
      try {
        const response = await axios.get('/api/productos/trends');
        setTrendProducts(response.data.trendProducts || response.data);
      } catch (error) {
        console.error('Error fetching trend products:', error);
        // Datos de ejemplo si falla la API
        setTrendProducts([
          {
            id: 101,
            autor: "Autor Trend 1",
            nombre: "Libro Más Vendido",
            precio: 5990,
            imagen: "https://via.placeholder.com/300x400",
            isTrend: true
          },
          // ... más productos trend
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendProducts();
  }, []);

  if (loading) return <div className="loading">Cargando productos trends...</div>;

 return (
     <div className="productos-section">
       <h2 className="section-title">BEST SELLERS</h2>
       
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
         {trendProducts.map(producto => (
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

export default Trends;