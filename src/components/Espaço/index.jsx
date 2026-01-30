import './index.scss';

const galleryImages = [
  { id: 1, src: "./rec.jpg", size: "large", label: "Recepção Acolhedora" },
  { id: 2, src: "./pilates.png", size: "small", label: "Sala de Pilates" },
  { id: 3, src: "./consul.jpg", size: "small", label: "Consultório de Psicologia" },
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