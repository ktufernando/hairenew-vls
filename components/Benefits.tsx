import { motion } from 'framer-motion';
import { FiCheckCircle, FiThumbsUp, FiSmile, FiClock, FiAward, FiShield } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const benefits = [
	{
		icon: <FiThumbsUp className="text-3xl text-primary-600" />,
		title: 'Aspecto 100% Natural',
		description:
			'Fabricadas con cabello humano de alta calidad para un resultado totalmente indetectable.',
	},
	{
		icon: <FiSmile className="text-3xl text-primary-600" />,
		title: 'Recupera tu Confianza',
		description:
			'Vuelve a sentirte seguro y atractivo en cualquier situación social o profesional.',
	},
	{
		icon: <FiClock className="text-3xl text-primary-600" />,
		title: 'Solución Inmediata',
		description:
			'Resultados instantáneos sin esperas ni tratamientos prolongados.',
	},
	{
		icon: <FiAward className="text-3xl text-primary-600" />,
		title: 'Servicio Premium',
		description:
			'Asesoramiento personalizado, colocación profesional y mantenimiento incluido.',
	},
	{
		icon: <FiShield className="text-3xl text-primary-600" />,
		title: 'Sin Efectos Secundarios',
		description:
			'Evita los riesgos de medicamentos o cirugías invasivas para la caída del cabello.',
	},
	{
		icon: <FiCheckCircle className="text-3xl text-primary-600" />,
		title: 'Adaptable a tu Estilo',
		description:
			'Personaliza el corte, color y densidad según tus preferencias y necesidades.',
	},
];

const Benefits = () => {
	// Definiendo las variables que faltaban
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<section id="beneficios" className="py-16 md:py-24 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<motion.span
						className="text-primary-600 font-semibold uppercase tracking-wider"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Beneficios Exclusivos
					</motion.span>
					<motion.h2
						className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						¿Por Qué Elegir Nuestras Soluciones Capilares?
					</motion.h2>
					<motion.p
						className="text-lg text-gray-700 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Ofrecemos mucho más que una simple prótesis capilar. Descubre todas
						las ventajas de nuestro servicio integral
					</motion.p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
							variants={itemVariants}
						>
							<div className="mb-4">{benefit.icon}</div>
							<h3 className="font-bold text-xl mb-2 text-gray-900">
								{benefit.title}
							</h3>
							<p className="text-gray-700">{benefit.description}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<WhatsAppButton
						text="Descubre Nuestras Soluciones"
						message="Hola, me gustaría conocer más sobre los beneficios de sus soluciones capilares"
						size="lg"
						className="mx-auto" // Añadido para centrar el botón
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Benefits;
