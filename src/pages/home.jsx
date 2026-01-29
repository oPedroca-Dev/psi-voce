import Header from '../components/Header'
import Hero from '../components/Hero'
import Specialties from '../components/Especialidades'
import Concept from '../components/Difenrencial'   
import FAQ from '../components/Faq'
import CTAFinal from '../components/CTA'
import Location from '../components/Local'
import Footer from '../components/Footer'
import About from '../components/sobre'
import Testimonials from '../components/dep'

import './home.scss'
export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>             {/* 1. Promessa de valor e impacto visual */}
            <About/>            {/* 2. Autoridade: Kelly, Jacque e os 7 anos de Instituto */}
            <Concept/>          {/* 3. O Diferencial: Como o cuidado integrado funciona */}
            <Specialties/>      {/* 4. O que vocês fazem: Psicologia, Pilates, etc. */}
            <Testimonials/>     {/* 5. Prova Social: O que os pacientes dizem (Cards) */}
            <FAQ/>              {/* 6. Quebra de objeções e dúvidas comuns */}
            <CTAFinal/>         {/* 7. Chamada decisiva para o agendamento */}
            <Location/>         {/* 8. Facilidade de acesso (Onde encontrar) */}
            <Footer/>
        
        </div>
    )
}
