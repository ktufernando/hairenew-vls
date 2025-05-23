import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';
import PlaceholderImage from './PlaceholderImage';
import WhatsAppButton from './WhatsAppButton';
import { trackEvent } from './GoogleAnalytics';

interface VideoSectionProps {
  videoUrl: string;
  featured?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl, featured = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastTrackedMilestoneRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePlay = () => {
    // Rastrear el evento de reproducción de VSL
    trackEvent(
      'play_video',
      'Video',
      'Main VSL Video Play',
      1
    );
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handleVideoProgress = (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => {
    // Rastrear progreso de visualización en puntos clave (25%, 50%, 75%, 100%)
    const milestones = [0.25, 0.5, 0.75, 1];
    const currentMilestone = milestones.find(milestone => 
      state.played >= milestone && 
      (!lastTrackedMilestoneRef.current || lastTrackedMilestoneRef.current < milestone)
    );
    
    if (currentMilestone && currentMilestone !== lastTrackedMilestoneRef.current) {
      trackEvent(
        'video_milestone',
        'Video',
        `VSL Video ${Math.round(currentMilestone * 100)}% watched`,
        Math.round(currentMilestone * 100)
      );
      lastTrackedMilestoneRef.current = currentMilestone;
    }
  };

  // Estilos especiales para cuando el video es destacado (featured)
  const featuredStyles = featured ? {
    section: "py-0 md:pt-20 pb-16 md:pb-24 bg-gradient-to-b from-primary-800 to-primary-900 text-white",
    title: "text-4xl md:text-5xl text-white",
    description: "text-gray-100 max-w-3xl",
    videoContainer: "mt-8 md:mt-10",
  } : {
    section: "py-16 md:py-24 bg-gray-50",
    title: "text-3xl md:text-4xl text-gray-900", 
    description: "text-gray-700 max-w-3xl",
    videoContainer: "",
  };

  return (
    <section ref={sectionRef} id="video" className={featuredStyles.section}>
      <div className="container mx-auto px-4">
        {featured ? (
          <div className="text-center mb-8 md:mb-12 pt-24 md:pt-12">
            <motion.h1 
              className={`font-display font-bold mb-4 leading-tight ${featuredStyles.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Las 3 Mejores Soluciones Para La Caída Del Cabello
            </motion.h1>
            <motion.p 
              className={`text-lg md:text-xl mb-4 ${featuredStyles.description} mx-auto`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Recupera tu juventud y confianza con abundante cabello ¡De un día para el otro!
            </motion.p>
            <motion.p
              className="text-lg text-accent-300 font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ¡Mira el video ahora! Sin dolor y sin cirugías. Transforma tu imagen y tu vida.
            </motion.p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.span 
              className="text-primary-600 font-semibold uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Video Explicativo
            </motion.span>
            <motion.h2 
              className={`font-display font-bold mt-2 mb-4 ${featuredStyles.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Descubre Cómo Transformar Tu Vida
            </motion.h2>
            <motion.p 
              className={`text-lg ${featuredStyles.description} mx-auto`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              En este video te revelamos las 3 soluciones definitivas para la caída del cabello que han cambiado la vida de miles de personas.
            </motion.p>
          </div>
        )}

        <motion.div 
          className={`relative max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl ${featuredStyles.videoContainer}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!hasStarted && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                className="bg-accent-500 hover:bg-accent-600 text-white rounded-full p-5 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlay}
              >
                <FiPlay size={36} />
              </motion.button>
            </div>
          )}
          
          {!hasStarted && (
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
          )}
          
          <div className="aspect-w-16 aspect-h-9">
            {!hasStarted ? (
              <PlaceholderImage 
                width={1280}
                height={720}
                text="Haz clic para ver las 3 mejores soluciones"
                bgColor="0369a1"
                textColor="FFFFFF"
                className="w-full h-full object-cover"
                alt="Video Thumbnail"
              />
            ) : (
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={hasStarted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onProgress={handleVideoProgress}
                config={{
                  youtube: {
                    playerVars: { 
                      showinfo: 0,
                      rel: 0,
                      modestbranding: 1
                    }
                  }
                }}
              />
            )}
          </div>
        </motion.div>

        {featured && (
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-300 text-sm mb-4">
              *Ver el video completo para descubrir la mejor solución
            </p>
            <WhatsAppButton 
              text="Consultar con un Especialista" 
              message="Hola, acabo de ver el video sobre soluciones para la caída del cabello y me gustaría más información"
              size="lg"
              className="mx-auto"
              location="vsl_video_section"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
