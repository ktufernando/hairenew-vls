import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            No Dejes Que La Caída Del Cabello Siga Afectando Tu Vida
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Únete a miles de personas que ya han recuperado su confianza y cambiado su vida con nuestras soluciones capilares
          </motion.p>
          
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <p>Asesoramiento personalizado por expertos en soluciones capilares</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <p>Colocación profesional con técnicas avanzadas e imperceptibles</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <p>Mantenimiento incluido para garantizar resultados duraderos</p>
              </div>
              <div className="flex items-start">
                <FiCheckCircle className="text-accent-400 mr-3 mt-1 text-xl flex-shrink-0" />
                <p>Satisfacción garantizada o te devolvemos tu dinero</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <WhatsAppButton 
              text="¡HABLAR CON UN ASESOR AHORA!" 
              message="Hola, quiero más información sobre cómo recuperar mi cabello"
              size="lg"
            />
            
            <p className="mt-4 text-sm text-gray-200">
              *Oferta por tiempo limitado - Plazas reducidas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
