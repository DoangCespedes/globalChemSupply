import { Link } from "react-router-dom";
import { ImMail } from 'react-icons/im';
import { FaFlagCheckered, FaWhatsappSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { SiMaplibre } from 'react-icons/si';
import { AiFillTikTok } from "react-icons/ai";
import logo from "../../../assets/logo2.png";
import { FiPhoneCall } from "react-icons/fi";
import "./Styles.css";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link active">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav social-icons">
              <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/profile.php?id=100072790695784"><IoLogoFacebook size={26} /></a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/collicenter_pdr/"><FaInstagramSquare size={26} /></a></li>
              <li className="nav-item"><a className="nav-link" href="https://wa.me/17866364189?text=I%20want%20a%20date%20in%20Collicion%20Center%20&%20PDR"><FaWhatsappSquare size={26} /></a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.tiktok.com/@joseventura9577?lang=es"><AiFillTikTok size={26} /></a></li>
              <li className="nav-item"><a className="nav-link" href="https://maps.app.goo.gl/FRbDBYYeYSpZ48wM9"><SiMaplibre size={26} /></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
