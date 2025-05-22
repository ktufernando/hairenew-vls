import { motion } from 'framer-motion';
import { FiCheckCircle, FiThumbsUp, FiSmile, FiClock, FiAward, FiShield } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const benefits = [
	{
		icon: <FiThumbsUp className="text-3xl text-primary-600" />,
		title: 'Más Confianza y Autoestima',
		description:
			'Siente la diferencia de tener la apariencia que siempre soñaste. Con cabello, recuperarás tu autoestima y caminarás con más seguridad en cada paso.',
	},
	{
		icon: <FiSmile className="text-3xl text-primary-600" />,
		title: 'Verte Más Joven Al Instante',
		description:
			'Con una prótesis capilar, parecerás 10 años más joven desde el primer día. No necesitas esperar meses ni hacer grandes sacrificios.',
	},
	{
		icon: <FiClock className="text-3xl text-primary-600" />,
		title: 'Energía Renovada Para Nuevas Actividades',
		description:
			'Sentirte seguro en tu imagen te dará energía para probar cosas nuevas. Desde ir al gimnasio hasta salir con mujeres o enfrentar nuevos retos.',
	},
	{
		icon: <FiAward className="text-3xl text-primary-600" />,
		title: 'Respeto y Autoridad',
		description:
			'Tener una imagen cuidada y rejuvenecida genera respeto inmediato. En el trabajo y en la vida diaria, notarás cómo cambia la forma en que te perciben.',
	},
	{
		icon: <FiShield className="text-3xl text-primary-600" />,
		title: 'Sin Dolor Ni Efectos Secundarios',
		description:
			'Sin riesgos de medicamentos que producen disfunción eréctil ni cirugías invasivas dolorosas.',
	},
	{
		icon: <FiCheckCircle className="text-3xl text-primary-600" />,
		title: 'Elegí tu propio estilo',
		description:
			'Personalizar el corte, color y densidad te dará un aspecto renovado y con actitud única.',
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
					<motion.h2
						className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Los beneficios de tener abundante cabello
					</motion.h2>
					<motion.p
						className="text-lg text-gray-700 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Nuestra agenda se completa cada vez más rápido. Las personas con calvicie se dan cuenta rápidamente del valor real en la vida que genera tener cabello.
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
						text="¡Quiero asesoría gratis ahora!"
						message="Hola, quiero una asesoría de sú protesís capilar"
						size="lg"
						className="mx-auto" // Añadido para centrar el botón
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Benefits;
