import { FiPhone } from 'react-icons/fi';
import WhatsAppButton from './WhatsAppButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="text-gray-400 mb-4">
              Soluciones avanzadas y definitivas para la caída del cabello, con asesoramiento personalizado, colocación profesional y mantenimiento incluido.
            </p>
            
            {/* Botón de WhatsApp en footer */}
            <WhatsAppButton 
              text="Contactar por WhatsApp" 
              message="Hola, me gustaría más información sobre sus servicios"
              size="sm"
              className="mb-4"
            />
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Cómo Funciona</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#preguntas" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#oferta-especial" className="text-gray-400 hover:text-white transition-colors">Oferta Especial</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="flex items-start">
              <FiPhone className="text-primary-500 mr-3 mt-1" />
              <span className="text-gray-400">+54 11 6827 5264</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} HaireNew. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidad</a>
          </div>
          <p className="mt-4">
            Este sitio no está afiliado con Systeme.io. Las imágenes utilizadas son solo con fines ilustrativos.
            Los resultados pueden variar en cada caso.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
