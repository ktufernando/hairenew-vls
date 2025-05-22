import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const faqs = [
	{
		question: '¿Qué es una protesis capilar?',
		answer:
			'Es un sistema formado por una base de poliuretano y pelo natural que adherido al cuero cabelludo permite recuperar todo tu pelo con un aspecto totalmente indetectable, tambien podrás realizar cualquier tipo de actividades o deportes, meterte a la piscina o mar sin nigún inconveniente.',
	},
	{
		question: '¿Cuánto dura una protesis capilar?',
		answer:
			'La prótesis capilar tiene una vida útil de 6 a 8 meses. Hay que tener en cuenta que la vas a utilizar en todo momento, mientras realizas deportes, te duchas, te peinas o incluso mientras dormis. Esto deteriora el cabello natural, haciendo que se reseque y también se desprendan de la misma, por lo cual después de este tiempo se recomienda renovar la prótesis. Aunque hay casos en los que llega a durar 10 0 12 meses.',
	},
	{
		question: '¿Es doloroso el proceso de colocación?',
		answer:
			'No, y en una hora esta listo.',
	},
	{
		question: '¿Las prótesis capilares se notan artificiales?',
		answer:
			'No, nuestras prótesis capilares están fabricadas con cabello humano de alta calidad y utilizamos técnicas avanzadas de colocación que garantizan un aspecto 100% natural. La mayoría de nuestros clientes aseguran que ni siquiera sus amigos cercanos pueden notar que llevan una prótesis.',
	},
	{
		question: '¿Qué incluye exactamente el servicio de asesoramiento?',
		answer:
			'Nuestro servicio de asesoramiento incluye una consulta personalizada donde analizamos tu tipo de alopecia, estructura del cabello, forma facial y estilo de vida. Con esta información, te recomendamos el tipo de prótesis más adecuado, color, densidad y estilo que mejor se adapte a ti para garantizar un resultado natural y cómodo.',
	},
	{
		question: '¿Cómo es el proceso de colocación?',
		answer:
			'La colocación es realizada por profesionales especializados utilizando técnicas no invasivas. Utilizamos adhesivos médicos hipoalergénicos que aseguran una fijación segura y duradera. El proceso tarda aproximadamente 1 hora y es completamente indoloro.',
	},
	{
		question: '¿Puedo hacer deporte o nadar con la prótesis puesta?',
		answer:
			'¡Absolutamente! Nuestras prótesis están diseñadas para adaptarse a un estilo de vida activo. Puedes nadar, hacer ejercicio, ducharte y realizar todas tus actividades cotidianas con total normalidad. Durante el asesoramiento, te daremos recomendaciones específicas según tus actividades habituales.',
	},
	{
		question: '¿Qué es y porque  servicio de mantenimiento?',
		answer:
			'El servicio de mantenimiento se hace periodicamente según la crecida de tu pelo (generalmente cada 2-4 semanas) donde reajustamos la prótesis, realizamos limpieza profesional, tratamientos de hidratación del cabello. También incluye asesoramiento continuo sobre cuidados diarios en casa.',
	},
	{
		question: '¿Funcionan las prótesis para todo tipo de alopecia?',
		answer:
			'Sí, nuestras soluciones son efectivas para todos los tipos y grados de alopecia, desde la pérdida parcial hasta la alopecia total. Tenemos opciones específicas para alopecia androgénica, alopecia areata, pérdida por tratamientos médicos o estrés, entre otras causas.',
	},
	{
		question: '¿Ofrecen alguna garantía con sus servicios?',
		answer:
			'Sí, todos nuestros servicios incluyen una garantía de satisfacción. Si no estás completamente satisfecho con los resultados durante los primeros 30 días, trabajaremos contigo para ajustar la solución o te devolveremos tu dinero de reserva.',
	},
];

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section id="preguntas" className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<motion.span
						className="text-primary-600 font-semibold uppercase tracking-wider"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Dudas Frecuentes
					</motion.span>
					<motion.h2
						className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Preguntas Frecuentes
					</motion.h2>
					<motion.p
						className="text-lg text-gray-700 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Respuestas a las dudas más comunes sobre nuestras soluciones
						capilares
					</motion.p>
				</div>

				<div className="max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
						>
							<button
								className="w-full py-4 px-6 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors focus:outline-none"
								onClick={() => toggleFAQ(index)}
							>
								<span className="font-medium text-gray-900">
									{faq.question}
								</span>
								{activeIndex === index ? (
									<FiChevronUp className="text-primary-600" />
								) : (
									<FiChevronDown className="text-primary-600" />
								)}
							</button>

							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<div className="p-6 bg-white text-gray-700">
											{faq.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<WhatsAppButton 
            text="¿Tienes más preguntas? ¡Contáctanos!" 
            message="Hola, tengo algunas preguntas sobre sus soluciones capilares"
            size="lg"
            className="mx-auto"
            location="faq_section"
          />
				</motion.div>
			</div>
		</section>
	);
};

export default FAQ;
