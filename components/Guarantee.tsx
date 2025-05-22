import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiThumbsUp } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const Guarantee = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.span 
              className="text-primary-600 font-semibold uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Tranquilidad Garantizada
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nuestra Garantía de Satisfacción
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tu satisfacción es nuestra prioridad absoluta. Por eso, respaldamos nuestro servicio con garantías reales.
            </motion.p>
          </div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <FiShield className="text-4xl text-primary-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Garantía de 30 Días</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Si no estás completamente satisfecho con tu prótesis capilar o nuestro servicio durante los primeros 30 días, te ofrecemos:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary-600 mr-3 mt-1" />
                    <span>Ajustes y modificaciones sin costo adicional</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-primary-600 mr-3 mt-1" />
                    <span>Devolución de la reserva si no estás satisfecho</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-600 p-8 md:p-12 text-white flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <FiThumbsUp className="text-4xl text-white mr-4" />
                  <h3 className="text-2xl font-bold">Lo Que Garantizamos</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-accent-400 mr-3 mt-1" />
                    <div>
                      <span className="font-bold block">Aspecto 100% Natural</span>
                      <p className="text-gray-100 mt-1">Nadie notará que llevas una prótesis capilar</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-accent-400 mr-3 mt-1" />
                    <div>
                      <span className="font-bold block">Máxima Comodidad</span>
                      <p className="text-gray-100 mt-1">Te olvidarás que la llevas puesta</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-accent-400 mr-3 mt-1" />
                    <div>
                      <span className="font-bold block">Calidad Premium</span>
                      <p className="text-gray-100 mt-1">Materiales de la más alta calidad y durabilidad</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-accent-400 mr-3 mt-1" />
                    <div>
                      <span className="font-bold block">Soporte Continuo</span>
                      <p className="text-gray-100 mt-1">Estamos contigo en cada paso del camino</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6">
              <span className="font-semibold">Sin riesgos, sin preocupaciones.</span> Estamos tan seguros de la calidad de nuestras soluciones capilares que asumimos todo el riesgo por ti.
            </p>
            
            <WhatsAppButton 
              text="¡Quiero mi garantía de satisfacción!" 
              message="Hola, me interesa saber más sobre la garantía que ofrecen con sus soluciones capilares"
              size="lg"
              className="mx-auto"
              location="guarantee_section"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
