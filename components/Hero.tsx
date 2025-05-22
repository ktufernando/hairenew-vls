import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ¿Estás Listo para Transformar tu Vida?
            <span className="block text-primary-600 mt-2">No esperes más para verte y sentirte como cuando tenias abundante cabello.</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ¡Es fácil, rápido y al alcance de tu mano!
          </motion.p>
          
          <motion.div 
            className="bg-primary-50 rounded-xl p-4 md:p-6 mb-8 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <FiCheckCircle className="text-primary-600 mr-2 text-xl" />
                <span className="font-medium">Asesoramiento personalizado</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="text-primary-600 mr-2 text-xl" />
                <span className="font-medium">Colocación profesional</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="text-primary-600 mr-2 text-xl" />
                <span className="font-medium">Resultados garantizados desde el primer día o te devolvemos la reserva</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <WhatsAppButton 
              text="¡HABLAR CON UN ASESOR AHORA!" 
              message="Hola, me interesa saber más sobre la solución para la caída del cabello"
              size="lg"
            />
          </motion.div>
          
          <motion.p 
            className="mt-4 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            *Oferta por tiempo limitado - Cupos reducidos
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
