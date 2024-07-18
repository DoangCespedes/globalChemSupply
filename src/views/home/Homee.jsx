import logoGlobal from '../../assets/GlobaLogo-5.png';
import logoGlobal2 from '../../assets/GlobaLogo-6.png';
import Slider1 from '../../core/components/sliders/Slider1';
// import RequestQuote from '../../core/components/nuevo/RequestQuote';

export const Homee = () => {
  return (
    <>
      {/* <Slider1/> */}
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Global Chem Supply</h1>
        <p className="lead">Líderes en suministros químicos a nivel mundial.</p>
        <hr className="my-4" />
        <p>
          Exportamos productos químicos de alta calidad a diversas industrias alrededor del mundo.
        </p>
        <a className="btn btn-primary btn-lg" href="#about" role="button">Conócenos más</a>
      </div>

      <div id="about" className="row my-5">
        <div className="col-md-6">
          <h2>Sobre Nosotros</h2>
          <p>
            Global Chem Supply es una empresa transnacional reconocida por su compromiso con la calidad y la innovación en el suministro de productos químicos. Con años de experiencia, hemos establecido una red global que nos permite servir a nuestros clientes de manera eficiente y confiable.
          </p>
        </div>
        <div className="col-md-6">
          <img src={logoGlobal} className="img-fluid" alt="Sobre Nosotros" />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 order-md-2">
          <h2>Nuestros Productos</h2>
          <p>
            Ofrecemos una amplia gama de productos químicos que cumplen con los más altos estándares de calidad y seguridad. Desde productos industriales hasta químicos especializados, tenemos la solución perfecta para tus necesidades.
          </p>
        </div>
        <div className="col-md-6  order-md-1">
            <Slider1/>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6">
          <h2>Contacta con Nosotros</h2>
          <p>
            Estamos aquí para ayudarte. Contáctanos para obtener más información sobre nuestros productos y servicios. Nuestro equipo de expertos está listo para ofrecerte la mejor atención y asesoría.
          </p>
        </div>
        <div className="col-md-6">
          <img src={logoGlobal2} className="img-fluid" alt="Contacta con Nosotros" />
        </div>
      </div>
      {/* <RequestQuote/> */}
    </div>
    </>
  );
};



