import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import ProblemSolution from '../components/ProblemSolution'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Guarantee from '../components/Guarantee'
import SpecialOffer from '../components/SpecialOffer'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import CountdownTimer from '../components/CountdownTimer'
import Transformations from '../components/Transformations'

export default function Home() {
  // Agregamos un efecto para trackear el scroll y activar elementos conforme se desplazan a la vista
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if(position.top < window.innerHeight * 0.75) {
          element.classList.add('animate-active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Para los elementos visibles inicialmente
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Solución para verte 10 años mas joven sin cirugías</title>
        <meta name="description" content="Descubre las 3 mejores soluciones para la caída del cabello. Prótesis capilares con asesoramiento personalizado, colocación profesional y mantenimiento incluido." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main>
        {/* Video principal */}
        <VideoSection videoUrl="https://youtu.be/wNYtpuEbhOs" featured={true} />
        
        <div className="fixed bottom-4 right-4 z-50">
          <CountdownTimer/>
        </div>
        
        {/* Nueva organización de secciones */}
        <Benefits />
        <Transformations />
        <ProblemSolution />
        <Testimonials />
        <Hero />
        <SpecialOffer />
        <Guarantee />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  )
}
