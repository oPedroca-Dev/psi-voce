import './index.scss';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop", size: "large", label: "Recepção Acolhedora" },
  { id: 2, src: "https://images.unsplash.com/photo-1596073413908-4412c0116810?q=80&w=1374&auto=format&fit=crop", size: "small", label: "Sala de Pilates" },
  { id: 3, src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1470&auto=format&fit=crop", size: "small", label: "Consultório de Psicologia" },
  { id: 4, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop", size: "medium", label: "Área de Relaxamento" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="gallery__container">
        <header className="gallery__header">
          <div className="gallery__title-group">
            <span className="gallery__tag">Ambiente</span>
            <h2 className="gallery__title">O nosso <span>refúgio.</span></h2>
          </div>
          <p className="gallery__description">
            Cada detalhe do <strong>Instituto Psi & Você</strong> foi pensado para proporcionar 
            conforto, privacidade e uma sensação imediata de paz.
          </p>
        </header>

        <div className="gallery__grid">
          {galleryImages.map((img) => (
            <figure key={img.id} className={`gallery__item gallery__item--${img.size}`}>
              <img src={img.src} alt={img.label} className="gallery__img" />
              <div className="gallery__overlay">
                <span className="gallery__label">{img.label}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}