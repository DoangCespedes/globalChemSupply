import React, { useState } from 'react';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    country: '',
    products: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>LE INVITAMOS A REVISAR NUESTROS PRODUCTOS DESTACADOS.</h2>
        <p>¿ENCONTRÓ EN NUESTRA WEB LA MATERIA PRIMA QUE NECESITA? ¿ESTÁ INTERESADO EN ALGÚN OTRO PRODUCTO QUÍMICO?</p>
        <a className="btn btn-primary btn-lg" href="#quote-form" role="button">SOLICITE UNA COTIZACIÓN AQUÍ</a>
      </div>

      <div id="quote-form" className="my-5">
        <h3>SOLICITE UNA COTIZACIÓN</h3>
        <p>Por favor llene nuestro formulario indicando el producto de su preferencia y la cantidad requerida y con gusto atenderemos su requerimiento a la brevedad posible.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">NOMBRE*</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL*</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="company">EMPRESA*</label>
            <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">TELF*</label>
            <input type="text" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">DIRECCION*</label>
            <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="country">PAIS*</label>
            <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="products">PRODUCTO(S) REQUERIDO(S)*</label>
            <input type="text" className="form-control" id="products" name="products" value={formData.products} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">CANTIDAD(ES) REQUERIDA(S)*</label>
            <input type="text" className="form-control" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">MENSAJE</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>

      <div className="mt-5">
        <h3>QUICK LINKS</h3>
        <ul className="list-unstyled">
          <li><a href="#home">HOME</a></li>
          <li><a href="#services">SERVICIOS</a></li>
          <li><a href="#about">NOSOTROS</a></li>
          <li><a href="#products">PRODUCTOS</a></li>
          <li><a href="#contact">CONTACTO</a></li>
          <li><a href="#blog">BLOG</a></li>
        </ul>
      </div>
    </div>
  );
};

export default RequestQuote;
