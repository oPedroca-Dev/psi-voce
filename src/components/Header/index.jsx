import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './index.scss';
import logoImg from "/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Profissionais', path: '/profissionais' },
    { label: 'Especialidades', path: '#especialidades' },
    { label: 'Espaço', path: '/espaco' }
  ];

  const handleAnchor = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
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

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${isOpen ? 'header--open' : ''}`}>
      <div className="header__container">
        
        <Link to="/" className="header__logo" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="Instituto Psi & Você" />
        </Link>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
          <div className="header__nav-list">
            {menuItems.map((item, index) => (
              <Link 
                key={item.label}
                to={item.path.startsWith('#') ? undefined : item.path}
                className={`header__link ${location.pathname === item.path ? 'active' : ''}`}
                style={{ transitionDelay: isOpen ? `${0.1 * index}s` : '0s' }}
                onClick={(e) => item.path.startsWith('#') ? handleAnchor(e, item.path) : setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="header__mobile-footer">
             <small>Agendamentos</small>
             <a href="https://wa.me/551146733583" target="_blank" rel="noreferrer">+55 11 4673-3583</a>
          </div>
        </nav>

        <div className="header__actions">
  <a 
    href="https://wa.me/551146733583?text=Olá! Gostaria de agendar uma avaliação no Instituto Psi & Você." 
    target="_blank" 
    rel="noreferrer" 
    className="header__btn"
  >
    <span>Agendar Avaliação</span>
  </a>
  
  <button className="header__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
    {isOpen ? <HiX /> : <HiMenuAlt3 />}
  </button>
</div>
      </div>
      
      <div className={`header__overlay ${isOpen ? 'visible' : ''}`} onClick={() => setIsOpen(false)}></div>
    </header>
  );
}