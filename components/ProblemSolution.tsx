import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const ProblemSolution = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            La Solución Definitiva
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Del Problema a la Solución
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Entendemos el impacto que la caída del cabello tiene en tu vida. Nuestra solución integral está diseñada para transformar esta situación.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">El Problema</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-red-600 mb-2">Pérdida de Confianza</h4>
                <p className="text-gray-700">La caída del cabello afecta profundamente la autoestima y confianza, limitando las interacciones sociales y profesionales.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-red-600 mb-2">Soluciones Temporales Insatisfactorias</h4>
                <p className="text-gray-700">Productos como tintes, fibras o sprays ofrecen resultados poco naturales y requieren aplicación diaria.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold text-red-600 mb-2">Tratamientos Costosos sin Garantías</h4>
                <p className="text-gray-700">Muchos tratamientos médicos son costosos, dolorosos y no garantizan resultados, además de tener potenciales efectos secundarios.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Nuestra Solución</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                <h4 className="font-bold text-primary-600 mb-2">Prótesis Capilares de Alta Calidad</h4>
                <p className="text-gray-700">Fabricadas con cabello humano real y materiales hipoalergénicos para un aspecto 100% natural e indetectable.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                <h4 className="font-bold text-primary-600 mb-2">Servicio Integral Personalizado</h4>
                <p className="text-gray-700">Asesoramiento experto para elegir la mejor solución, colocación profesional y mantenimiento periódico incluido.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                <h4 className="font-bold text-primary-600 mb-2">Resultados Inmediatos y Duraderos</h4>
                <p className="text-gray-700">Sin tiempo de espera, sin dolor y con resultados garantizados que transformarán tu imagen y confianza desde el primer día.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WhatsAppButton 
            text="Descubre Cómo Funciona"
            message="Hola, me interesa conocer más sobre la solución definitiva para mi problema de calvicie"
            size="lg"
            className="mx-auto" // Añadido para centrar el botón
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
