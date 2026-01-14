// CTAFinal/index.jsx
import './index.scss';

export default function CTAFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__container">
        <div className="cta-final__box">
          <h2 className="cta-final__title">
            Pronto para começar sua <br />
            <span>jornada de transformação?</span>
          </h2>
          <p className="cta-final__text">
            Agende uma avaliação e descubra como nosso cuidado integrado <br />
            pode mudar sua percepção de saúde e bem-estar.
          </p>
          <a href="https://wa.me/seunumerowhatsapp" className="cta-final__btn">
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}