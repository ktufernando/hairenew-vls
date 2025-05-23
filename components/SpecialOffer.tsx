import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiGift, FiVideo, FiAlertCircle } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const SpecialOffer = () => {
  return (
    <section id="oferta-especial" className="py-16 md:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="text-accent-300 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Oferta Especial por Tiempo Limitado
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pack Completo - Solo Esta Semana
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Por tiempo limitado, Obtene todo lo necesario para transformar tu imagen y recuperar tu confianza con un solo paquete
          </motion.p>
          
          {/* Indicador de tiempo limitado */}
          <motion.div 
            className="flex items-center justify-center mt-4 bg-red-500 bg-opacity-20 rounded-full py-2 px-6 max-w-max mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FiAlertCircle className="text-red-300 mr-2" />
            <p className="text-sm font-medium text-red-100">¡La oferta termina este domingo a las 23:59!</p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-accent-500 text-white text-xl font-bold py-3 px-6 rounded-full md:mr-4 mb-4 md:mb-0">
                Oferta Exclusiva
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">Pack Transformación Total</h3>
                <p className="text-gray-200">Todo lo que necesitas para recuperar tu imagen</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Prótesis Capilar Premium</h4>
                  <p className="text-gray-200">Fabricada con cabello humano de la más alta calidad para un aspecto 100% natural</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Asesoramiento Personalizado</h4>
                  <p className="text-gray-200">Sesión privada con un especialista para encontrar la mejor solución para ti</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Colocación Profesional</h4>
                  <p className="text-gray-200">Instalación por expertos para garantizar un resultado perfecto e indetectable</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiVideo className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Video-Tutorial de Mantenimiento</h4>
                  <p className="text-gray-200">Aprende a mantener tu prótesis en perfectas condiciones desde casa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiGift className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Mantenimiento Gratuito</h4>
                  <p className="text-gray-200">Primera sesión de mantenimiento profesional totalmente gratis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiClock className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Garantía de Satisfacción</h4>
                  <p className="text-gray-200">30 días de garantía para que pruebes sin riesgos nuestra solución</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-800 rounded-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <span className="text-accent-300 font-bold text-lg">Precio especial por tiempo limitado</span>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-400 line-through text-xl mr-3">900 USD</span>
                    <span className="text-white text-3xl font-bold">480 USD</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white text-primary-800 py-2 px-4 rounded-lg font-bold mr-3">
                    AHORRA 420 USD
                  </div>
                  <div className="text-white font-bold">
                    47% DESCUENTO
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <WhatsAppButton 
                text="¡QUIERO APROVECHAR ESTA OFERTA!" 
                message="Hola, me interesa el Pack Transformación Total con la oferta especial de esta semana"
                size="lg"
                className="w-full md:w-auto md:px-12"
                location="special_offer_section"
              />
              <p className="mt-4 text-sm text-gray-300">
                *Oferta válida solo hasta este domingo - ¡Quedan pocos lugares!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
