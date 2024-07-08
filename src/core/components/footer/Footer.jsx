import { NavLink } from 'react-router-dom';
import {ImMail} from 'react-icons/im'
import {FaWhatsappSquare} from 'react-icons/fa'
import {TiGroupOutline} from 'react-icons/ti'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import logo from '../../../assets/logo2.png';
import './Styles.css'


const Footer = () => {
  return (
    <>
        <footer>

            <div className="container__footer">
                
                <div className="box__footer">
                    <div className="terms">
                        <h4>Collision center & PDR <br/> Your Trusted Auto Repair Partner</h4>
                        <p>At Collision Center & PDR, we are dedicated to providing the highest quality auto repair services 
                        with integrity and excellence. Our skilled technicians, state-of-the-art technology, 
                        and commitment to customer satisfaction ensure that your vehicle receives the best care possible.
                        Thank you for trusting us with your repair needs. Drive safe and with confidence!</p>
                    </div>
                </div>
                
                <div className="box__footer_logo">
                    <div className="logo">
                    <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
                    </div>
                </div>

                

                <div className="box__footer">
                    
                    <NavLink to='/hail-dent-repair'><h6>Hail  Dent Repair</h6></NavLink>
                    <NavLink to='/paint-corrections'><h6>Paint Corrections</h6></NavLink>      
                    <NavLink to='/vehicle-restoration'><h6>Vehicle Restoration </h6></NavLink>      
                    <NavLink to='/window-tinting'><h6>Window Tinting </h6></NavLink>      
                    <NavLink to='/auto-detailing'><h6>Auto Detailing</h6></NavLink>      
                    <NavLink to='/ceramic-coatings'><h6>Ceramic Coatings</h6></NavLink>       
                </div>

                <div className="box__footer">
                    <h4>Social Networks</h4>
                    <a href="#"> <IoLogoFacebook/> Facebook</a>
                    <a href="#"><SiMaplibre/> GoogleMap</a>
                    <a href="#"><FaWhatsappSquare/> WhatsApp</a>
                    <a href="#"><FaInstagramSquare/> Instagram</a>
                </div>

            </div>
            <hr/>
            <div className="box__copyright">
                
                <p>All rights reserved © 2024 <b>Collision center & PDR</b></p>
            </div>
            </footer>
    </>
  )
}

export default Footer