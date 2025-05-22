import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiStar } from 'react-icons/fi';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Plan Básico",
      description: "Solución inicial para quienes buscan mejorar su apariencia",
      price: isAnnual ? 990 : 99,
      period: isAnnual ? "/año" : "/mes",
      discount: isAnnual ? "Ahorra un 15%" : "",
      features: [
        { text: "Prótesis capilar de calidad estándar", included: true },
        { text: "Asesoramiento básico", included: true },
        { text: "Colocación profesional", included: true },
        { text: "1 sesión de mantenimiento trimestral", included: true },
        { text: "Garantía de 6 meses", included: true },
        { text: "Ajustes ilimitados", included: false },
        { text: "Productos de cuidado premium", included: false },
      ],
      cta: "Comenzar Ahora",
      popular: false,
    },
    {
      name: "Plan Premium",
      description: "Nuestra solución más popular con todos los servicios esenciales",
      price: isAnnual ? 1790 : 179,
      period: isAnnual ? "/año" : "/mes",
      discount: isAnnual ? "Ahorra un 20%" : "",
      features: [
        { text: "Prótesis capilar de alta calidad", included: true },
        { text: "Asesoramiento personalizado completo", included: true },
        { text: "Colocación profesional avanzada", included: true },
        { text: "Mantenimiento mensual incluido", included: true },
        { text: "Garantía de 1 año", included: true },
        { text: "Ajustes ilimitados", included: true },
        { text: "Kit de productos de cuidado básico", included: true },
      ],
      cta: "Elegir Plan Premium",
      popular: true,
    },
    {
      name: "Plan VIP",
      description: "Experiencia completa con todos los servicios exclusivos",
      price: isAnnual ? 2490 : 249,
      period: isAnnual ? "/año" : "/mes",
      discount: isAnnual ? "Ahorra un 25%" : "",
      features: [
        { text: "Prótesis capilar premium personalizada", included: true },
        { text: "Asesoramiento VIP con experto senior", included: true },
        { text: "Técnica de colocación avanzada exclusiva", included: true },
        { text: "Mantenimiento semanal incluido", included: true },
        { text: "Garantía de 2 años todo incluido", included: true },
        { text: "Ajustes y retoques ilimitados", included: true },
        { text: "Kit completo de productos premium", included: true },
      ],
      cta: "Obtener Plan VIP",
      popular: false,
    }
  ];

  return (
    <section id="precios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary-600 font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Planes y Tarifas
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Soluciones Adaptadas a Tus Necesidades
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Elige el plan que mejor se adapte a ti y comienza a disfrutar de una nueva imagen
          </motion.p>

          <div className="flex justify-center mt-8 mb-12">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button 
                className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'}`}
                onClick={() => setIsAnnual(false)}
              >
                Mensual
              </button>
              <button 
                className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${isAnnual ? 'bg-white shadow-md text-gray-900' : 'text-gray-600'}`}
                onClick={() => setIsAnnual(true)}
              >
                Anual <span className="text-primary-600 font-bold">-20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl relative ${plan.popular ? 'border-2 border-primary-500 transform scale-105 md:-mt-4' : 'border border-gray-200'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white py-1 px-4 text-center absolute top-0 right-0 left-0">
                  <div className="flex items-center justify-center text-sm font-bold">
                    <FiStar className="mr-1" /> Más Popular <FiStar className="ml-1" />
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-9' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm h-12">{plan.description}</p>
                
                <div className="mt-6 mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  {plan.discount && (
                    <span className="text-primary-600 font-medium text-sm block mt-1">{plan.discount}</span>
                  )}
                </div>
                
                <a 
                  href="https://wa.me/541168275264?text=Quiero%20reservar%20mi%20lugar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-md text-center font-bold ${plan.popular ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} transition-colors`}
                >
                  {plan.cta}
                </a>
              </div>
              
              <div className="bg-gray-50 p-6">
                <h4 className="font-bold text-gray-900 mb-4">Qué incluye:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      ) : (
                        <FiX className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-bold text-lg mb-2">¿Necesitas una solución personalizada?</h3>
          <p className="text-gray-700 mb-4">Contáctanos para recibir una propuesta adaptada específicamente a tus necesidades.</p>
          <a 
            href="https://wa.me/541168275264?text=Quiero%20una%20soluci%C3%B3n%20personalizada" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Solicitar Plan Personalizado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
