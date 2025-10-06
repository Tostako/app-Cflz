import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/ui/navbar";
import videoPortada from "./assets/VIDEOPORTADA.mp4";
import imagen from "./assets/casa.jpg";
import {AppleCardsCarouselDemo} from "./components/features/carouselapple";
import Footer from "./components/ui/footer";
import logo from './assets/LOGOCASA.png';

// Hook personalizado para detectar scroll optimizado
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollToSection };
};

// Componente separado para el video
const VideoBackground = ({ videoSrc, imageSrc, opacity = 0.3 }) => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Forzar la reproducción del video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Video playing successfully');
          })
          .catch(error => {
            console.error('❌ Video play error:', error);
            setVideoError(true);
          });
      }
    }
  }, []);

  return (
    <>
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error('❌ Video failed to load');
            setVideoError(true);
          }}
          onLoadedData={() => console.log('✅ Video data loaded')}
          onCanPlay={() => console.log('✅ Video can play')}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback Image - solo si hay error */}
      {videoError && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      )}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity }}
      />
    </>
  );
};

function App() {
  const { scrollY, scrollToSection } = useScrollPosition();

  const textOffset = scrollY * 0.15;
  const textOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div style={{ backgroundColor: '#F5F5DC' }}>
      {/* Navbar Fijo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar scrollToSection={scrollToSection} />
      </div>

      {/* Primer Video Background */}
      <div className="min-h-screen relative overflow-hidden">
        <VideoBackground 
          videoSrc={videoPortada} 
          imageSrc={imagen}
          opacity={0.3}
        />
        
        <div
          className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white"
          style={{
            transform: `translateY(-${textOffset}px)`,
            opacity: textOpacity,
          }}
        >
          <div id="nosotros" className="w-full max-w-lg mx-auto mb-8">
            <img src={logo} alt="Logo" className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto mx-auto" />       
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="font-Montserrat-semi-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center px-4 leading-tight" style={{ color: '#1c1c1c' }}>
              Donde cada celebración se convierte en un momento inolvidable
            </h1>
          </div>
        </div>
      </div>

      {/* Contenido adicional */}
      <div id="proyectos" className="min-h-screen p-4 sm:p-6 lg:p-8 relative overflow-hidden" style={{ backgroundColor: '1c1c1c' }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 500) * -0.3)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 300) / 200)),
          }}
        >
          
          <div className="flex flex-col items-center mt-4 sm:mt-6 lg:mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
            <AppleCardsCarouselDemo />
          </div>
        </div>
      </div>

      {/* Sección Servicios */}
      <div id="servicios" className="min-h-screen p-4 sm:p-6 lg:p-8 relative overflow-hidden" style={{ backgroundColor: '#FDF5E6' }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 1000) * -0.2)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 800) / 200)),
          }}
        >
          <div className="flex flex-col items-center mt-4 sm:mt-6 lg:mt-8 space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="font-Montserrat-semi-bold text-3xl sm:text-4xl lg:text-5xl text-center px-4 mb-4" style={{ color: '#2F4F2F' }}>
                Servicios
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-text-dark text-sm sm:text-base lg:text-lg px-4 max-w-3xl mx-auto opacity-80 leading-relaxed">
                Ofrecemos experiencias memorables que combinan elegancia, atención al detalle y un entorno encantador.
                Nos encargamos de que cada celebración refleje la esencia y estilo de nuestros clientes, con servicios diseñados para crear momentos únicos e inolvidables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-4">
              <div className="bg-white p-6 lg:p-8 rounded-xl text-center hover:bg-soft-cream transition-all duration-300 border border-primary shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">🎉</span>
                  </div>
                  <h3 className="text-primary text-xl lg:text-2xl font-semibold mb-4 leading-tight">Alquiler del Salón de Eventos</h3>
                </div>
                <p className="text-text-dark text-sm lg:text-base leading-relaxed text-left">
                  Ponemos a tu disposición un espacio exclusivo que se adapta a cualquier tipo de celebración. Nuestro salón combina comodidad, diseño y flexibilidad para acoger desde bodas y cumpleaños hasta reuniones empresariales.
                  Cada rincón ha sido pensado para ofrecer una atmósfera sofisticada y acogedora, con la infraestructura necesaria para hacer de tu evento un éxito.
                </p>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-xl text-center hover:bg-soft-cream transition-all duration-300 border border-secondary shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">🎨</span>
                  </div>
                  <h3 className="text-secondary text-xl lg:text-2xl font-semibold mb-4 leading-tight">Servicio Gastronómico</h3>
                </div>
                <p className="text-text-dark text-sm lg:text-base leading-relaxed text-left">
                  Deleita a tus invitados con una experiencia culinaria inigualable.
                  Contamos con un equipo especializado que diseña menús personalizados según el tipo de evento, fusionando sabores tradicionales y gourmet. Desde cocteles hasta cenas elegantes, cuidamos cada detalle para garantizar calidad, presentación y sabor excepcional.
                </p>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-xl text-center hover:bg-soft-cream transition-all duration-300 border border-accent shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">🍽️</span>
                  </div>
                  <h3 className="text-accent text-xl lg:text-2xl font-semibold mb-4 leading-tight">Gestión Integral del Evento</h3>
                </div>
                <p className="text-text-dark text-sm lg:text-base leading-relaxed text-left">
                  Nos ocupamos de todo para que tú solo disfrutes.
                  Nuestro servicio integral incluye la planeación, coordinación y supervisión de cada detalle: decoración, ambientación, música, tiempos y protocolo.
                  Convertimos tu idea en una experiencia perfectamente organizada, con un equipo profesional que asegura armonía, elegancia y puntualidad en cada momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo Video Background */}
      <div className="min-h-screen relative overflow-hidden">
        <VideoBackground 
          videoSrc={videoPortada} 
          imageSrc={imagen}
          opacity={0.4}
        />
        
        <div id="contacto" className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-Montserrat-semi-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                ESTO ES CFLZ EVENTOS
              </h1>
              <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
              <p className="font-Montserrat-semi-bold text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90">
                INNOVACIÓN, EXCELENCIA, LIDERAZGO.
              </p>
            </div>
            <div className="pt-4 sm:pt-6">
              <a
                href="https://wa.me/c/573184575744"
                className="inline-block font-Montserrat-semi-bold bg-primary text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-primary-hover transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contáctanos Ahora
              </a>
              <p className="text-sm sm:text-base mt-4 opacity-75">
                Transformemos tu visión en realidad
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;