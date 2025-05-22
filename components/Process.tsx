import { motion } from 'framer-motion';
import { FiUsers, FiTool, FiRefreshCw } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const steps = [
	{
		icon: <FiUsers className="text-4xl text-primary-600" />,
		title: 'Asesoramiento Personalizado',
		description:
			'Nuestros expertos analizan tu caso particular y te recomiendan la mejor solución capilar adaptada a tus necesidades específicas, tipo de cabello y estilo de vida.',
	},
	{
		icon: <FiTool className="text-4xl text-primary-600" />,
		title: 'Colocación Profesional',
		description:
			'Utilizamos técnicas avanzadas para una colocación perfecta e imperceptible. El proceso es rápido, cómodo y completamente seguro, realizado por especialistas certificados.',
	},
	{
		icon: <FiRefreshCw className="text-4xl text-primary-600" />,
		title: 'Mantenimiento Incluido',
		description:
			'Incluimos sesiones de mantenimiento periódicas para garantizar que tu prótesis capilar luzca siempre perfecta. Te enseñamos además cómo cuidarla en tu día a día.',
	},
];

const Process = () => {
	return (
		<section id="como-funciona" className="py-16 md:py-24 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<motion.span
						className="text-primary-600 font-semibold uppercase tracking-wider"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
					>
						Nuestro Proceso
					</motion.span>
					<motion.h2
						className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-gray-900"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Cómo Funciona Nuestro Servicio
					</motion.h2>
					<motion.p
						className="text-lg text-gray-700 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						Te ofrecemos un servicio integral para garantizar los mejores
						resultados
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							className="text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 * index }}
						>
							<div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-md">
								{step.icon}
							</div>

							<div className="relative mb-8 md:mb-0">
								<h3 className="font-bold text-xl mb-3 text-gray-900">
									{step.title}
								</h3>
								<p className="text-gray-700">{step.description}</p>

								{index < steps.length - 1 && (
									<div className="hidden md:block absolute top-1/4 -right-8 transform translate-x-1/2">
										<svg
											className="w-12 h-12 text-primary-300"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</div>
								)}
							</div>
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
						text="Descubre Cómo Funciona"
						message="Hola, me gustaría saber más sobre cómo funciona el proceso de su solución capilar"
						size="lg"
						className="mx-auto"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default Process;
