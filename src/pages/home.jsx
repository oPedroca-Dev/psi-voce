import Header from '../components/Header'
import Hero from '../components/Hero'
import Specialties from '../components/Especialidades'
import Concept from '../components/Difenrencial'   
import FAQ from '../components/Faq'
import CTAFinal from '../components/CTA'
import Location from '../components/Local'
import Footer from '../components/Footer'
import './home.scss'
export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Specialties/>
            <Concept/>
            <FAQ/>
            <CTAFinal/>
            <Location/>
            <Footer/>
        
        </div>
    )
}
