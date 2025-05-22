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
            La Solución Ideal
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
            Entendemos el impacto que la caída del cabello tiene en tu vida. Nuestra solución integral está diseñada para transformar tú situación.
          </motion.p>
        </div>

        {/* Imagen central destacada - visible en móvil y tablets */}
        <div className="xl:hidden mb-10">
          <motion.div
            className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/hair1.jpeg"
              alt="Transformación capilar"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="bg-primary-600 text-white py-3 px-4 text-center">
              <p className="font-medium">Transformación real con nuestras soluciones</p>
            </div>
          </motion.div>
        </div>

        {/* Nueva estructura para pantallas grandes (xl): imagen a la izquierda, problemas y soluciones a la derecha */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          {/* Imagen en pantallas grandes - ocupa 5 columnas a la izquierda */}
          <motion.div 
            className="hidden xl:block xl:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-full">
              <Image
                src="/images/hair1.jpeg"
                alt="Transformación capilar"
                width={600}
                height={900}
                className="w-full h-full object-cover"
                style={{ minHeight: '600px' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Transforma tu imagen</h3>
                <p>Resultados reales desde el primer día</p>
              </div>
            </div>
          </motion.div>
          
          {/* Problemas y soluciones - vista normal para móvil/tablet, y a la derecha para xl */}
          <div className="xl:col-span-7">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Nuestra Solución</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                    <h4 className="font-bold text-primary-600 mb-2">Prótesis Capilares de Alta Calidad</h4>
                    <p className="text-gray-700">Fabricadas con cabello humano real y materiales hipoalergénicos para un aspecto 100% natural e indetectable. ¡Nadie lo va a notar!</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                    <h4 className="font-bold text-primary-600 mb-2">Servicio Integral Personalizado</h4>
                    <p className="text-gray-700">Asesoramiento experto para elegir la que mejor se adapte a vos, colocación profesional adaptado a tu estilo y necesidades.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-600">
                    <h4 className="font-bold text-primary-600 mb-2">Resultados Inmediatos y Duraderos</h4>
                    <p className="text-gray-700">Sin tiempo de espera, sin dolor y con resultados garantizados que transformarán tu imagen y confianza desde el primer día.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
            className="mx-auto"
            location="problem_solution_section"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
