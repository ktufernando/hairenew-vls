import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiPlay, FiX } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';
import ReactPlayer from 'react-player/youtube';
import { trackEvent } from './GoogleAnalytics';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const transformationVideos = [
  {
    title: "Carlos, 38 años",
    description: "De inseguro a emprendedor exitoso en menos de un mes",
    videoId: "_rnfpL1PTCo",
  },
  {
    title: "Miguel, 45 años",
    description: "Recuperó su vida social y encontró pareja tras años de aislamiento",
    videoId: "XEmvhUIaxHI",
  },
  {
    title: "German, 32 años",
    description: "Ascendió en su trabajo tras recuperar su imagen profesional",
    videoId: "MZSYRoWyXNs",
  },
  {
    title: "Guillermo, 53 años",
    description: "Dejó atrás la depresión y volvió a disfrutar de la vida",
    videoId: "hIwZdXnpaZs",
  },
  {
    title: "Marcos, 36 años",
    description: "Se quitó 10 años de encima en una sola sesión",
    videoId: "QfuIo4iaQJ0",
  }
];

const Transformations = () => {
  const swiperRef = useRef<any>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (videoId: string, title: string) => {
    // Rastrear evento de apertura de video de transformación
    trackEvent(
      'play_transformation_video',
      'Video',
      `Transformation Video - ${title} (${videoId})`,
      1
    );
    
    setActiveVideo(videoId);
    setIsModalOpen(true);
    // Detener la reproducción automática del swiper cuando se abre un video
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    setIsModalOpen(false);
    // Reanudar la reproducción automática cuando se cierra el video
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section id="transformaciones" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-primary-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Historias Reales
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Transformaciones Que Cambiaron Vidas
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mira cómo estas personas recuperaron su confianza, autoestima y apariencia juvenil
          </motion.p>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 5,
              },
            }}
            className="transformations-swiper py-10"
          >
            {transformationVideos.map((video, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="relative thumbnail-container">
                    {/* Contenedor con ratio vertical para Shorts */}
                    <div className="aspect-w-9 aspect-h-16 md:aspect-w-9 md:aspect-h-16">
                      <img 
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => openVideoModal(video.videoId, video.title)}
                        className="bg-primary-600 bg-opacity-90 hover:bg-primary-700 text-white rounded-full p-4 transition-all transform hover:scale-110"
                      >
                        <FiPlay size={24} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h3 className="font-bold text-xl mb-2 text-gray-900">{video.title}</h3>
                    <p className="text-gray-700">{video.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button 
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary-600 hover:bg-primary-50 focus:outline-none hidden md:block"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary-600 hover:bg-primary-50 focus:outline-none hidden md:block"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Modal para reproducir videos */}
        {isModalOpen && activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75" onClick={closeVideoModal}>
            <div 
              className="relative bg-black rounded-lg overflow-hidden max-w-sm w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2"
                onClick={closeVideoModal}
              >
                <FiX size={24} />
              </button>
              
              <div className="aspect-w-9 aspect-h-16" style={{ maxHeight: '80vh' }}>
                <ReactPlayer
                  url={`https://www.youtube.com/shorts/${activeVideo}`}
                  width="100%"
                  height="100%"
                  playing={true}
                  controls={true}
                  config={{
                    playerVars: {
                      showinfo: 0,
                      rel: 0,
                      modestbranding: 1
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WhatsAppButton 
            text="¡Quiero mi propia transformación!" 
            message="Hola, me gustaría información sobre cómo puedo lograr una transformación como las que vi en los videos"
            size="lg"
            className="mx-auto"
            location="transformations_section"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Transformations;
