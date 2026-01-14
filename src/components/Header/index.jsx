import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Adicionei useNavigate
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './index.scss';
import logoImg from "/logo.png"; // Removido o /public/ pois no Vite se acessa direto da raiz

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  // Função para lidar com links de âncora (#)
  const handleAnchor = (e, target) => {
    e.preventDefault();
    closeMenu();

    // Se estivermos em outra página, primeiro vai para a Home, depois scrolla
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isOpen ? 'header--open' : ''}`}>
      <div className="header__container">
        
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src={logoImg} alt="Instituto Psi & Você" />
        </Link>

        <div className={`header__overlay ${isOpen ? 'header__overlay--visible' : ''}`} onClick={closeMenu}></div>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <div className="header__nav-wrapper">
            <div className="header__links">
              <Link to="/" className={`header__link ${location.pathname === '/' ? 'header__link--active' : ''}`}>
                Início
              </Link>
              <Link to="/profissionais" className={`header__link ${location.pathname === '/profissionais' ? 'header__link--active' : ''}`}>
                Profissionais
              </Link>
              {/* Agora usando a função handleAnchor corretamente */}
              <a 
                href="#especialidades" 
                className="header__link" 
                onClick={(e) => handleAnchor(e, "#especialidades")}
              >
                Especialidades
              </a>
                <Link to="/espaco" className={`header__link ${location.pathname === '/espaco' ? 'header__link--active' : ''}`}>
                Espaço
              </Link>
            </div>
            
            <div className="header__divider"></div>

            <div className="header__actions">
              <Link to="/contato" className="header__btn-contact">
                <span>Fale Conosco</span>
              </Link>
            </div>
          </div>
        </nav>

        <button 
          className={`header__toggle ${isOpen ? 'header__toggle--active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </header>
  );
}