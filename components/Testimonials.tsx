import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Primer testimonio fijo con imágenes antes/después
const featuredTestimonial = {
  name: "Carlos Martínez",
  beforeImage: "images/testimonial_before.jpeg",
  afterImage: "images/testimonial_after.jpeg",
  quote: "Nunca imaginé que podría volver a sentirme tan confiado. La prótesis capilar es increíblemente natural y el servicio de asesoramiento fue fundamental para elegir la opción perfecta para mí.",
  rating: 5,
  location: "Buenos Aires"
};

// Testimonios del carrusel (sin imágenes)
const testimonials = [
  {
    name: "Fernando Gómez",
    quote: "Soy otra persona. Me siento mucho mas joven y con confianza para entablar conversaciones con mujeres.",
    rating: 5,
    location: "Berazategui"
  },
  {
    name: "Alejandro Ruiz",
    quote: "Voy a estar siempre agradecidos con ustedes. De sentirme triste y solo, pase a verme al espejo y sentirme autosuficiente. Empecé el gimnasio y baile. Recuperé mis ganas de vivir.",
    rating: 5,
    location: "Rosario"
  },
  {
    name: "Juan Hernandez Lago",
    quote: "Envié tu video a muchos conocidos y recibí una lluvia de Whatsapp agradeciemdome. Es importante que todos los que sufrimos de los mismo sepan que existe este método y es posible hacerlo en Argentina.",
    rating: 5,
    location: "San Justo"
  },
  {
    name: "Sergio Menichelli",
    quote: "Estoy muy contento con el resultado. Mi familia esta feliz con mi cambio físico y me siento mucho mas seguro en mi ambiente laboral.",
    rating: 5,
    location: "Málaga"
  },
];

const Testimonials = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            className="text-primary-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Historias de éxito
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lo Que Nuestros Clientes Dicen
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cientos de personas ya recuperaron su confianza y autoestima con nuestra solució capilar
          </motion.p>
        </div>

        {/* Testimonio destacado con imágenes de antes/después */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8">
                <h3 className="font-bold text-2xl text-gray-900 mb-2">{featuredTestimonial.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{featuredTestimonial.location}</p>
                
                <div className="flex mb-4">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{featuredTestimonial.quote}"</p>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-primary-600 font-semibold">Cliente verificado</p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8">
                <h4 className="font-bold text-lg text-gray-900 mb-4 text-center">Transformación</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2 text-center">Antes</p>
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                      <img 
                        src={featuredTestimonial.beforeImage}
                        alt={`${featuredTestimonial.name} antes`}
                        className="object-cover w-full h-full"
                        style={{ height: '359px' }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-2 text-center">Después</p>
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                      <img 
                        src={featuredTestimonial.afterImage}
                        alt={`${featuredTestimonial.name} después`}
                        className="object-cover w-full h-full"
                        style={{ height: '359px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carrusel de testimonios (sin imágenes) */}
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
              delay: 5000,
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
            }}
            className="testimonials-swiper py-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="mb-4">
                    <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 flex-grow italic">"{testimonial.quote}"</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-primary-600 font-semibold text-sm">Cliente verificado</p>
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

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WhatsAppButton 
            text="¡Quiero los mismos resultados!" 
            message="Hola, he visto los testimonios en su web y me gustaría saber cómo puedo conseguir resultados similares"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
