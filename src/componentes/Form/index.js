import React from 'react';
import './styles.scss';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faUser, faHome, faCity, faGlobeAmericas, faArchive } from '@fortawesome/free-solid-svg-icons';


class Form extends React.Component {
  render() {
    return(
      <div className="form-wrapper">

        <div className="form-contact">
          <h2 className="contact-information form-title">Contact information</h2>
          <p className="form-email form-subtitle">E-mail</p>
          <div className="div-position">
            <p className="form-icono" > <FontAwesomeIcon icon={faEnvelope} /> </p>
            <input className="input-email form-input" type="email" placeholder= "Enter your email..." />
          </div>
          <p className="form-phone form-subtitle">Phone</p>
          <div className="div-position">
            <p className="form-icono"> <FontAwesomeIcon icon={faPhoneAlt} /> </p>
            <input className="input-phone form-input" type="tel" placeholder="Enter your phone..." />
          </div>
          
        </div>
        <div className="form-shipping">
          <h2 className="shipping-address form-title">Shipping address</h2>
          <p className="form-name form-subtitle">Full name</p>
          <div className="div-position">
            <p className="form-icono">  <FontAwesomeIcon icon={faUser} /> </p>
            <input className="input-name form-input" type="text" placeholder="Your full name..."/>
          </div>
          
          <p className="form-address form-subtitle">Address</p>
          <div className="div-position">
            <p className="form-icono"> <FontAwesomeIcon icon={faHome} /> </p>
           <input className="input-address form-input" type="text" placeholder="Your address..." />
          </div>
          
          <p className="form-city form-subtitle">City</p>
          <div className="div-position">
            <p className="form-icono"><FontAwesomeIcon icon={faCity} /> </p>
            <input className="input-city form-input" type="text" placeholder="Your city..." />
          </div>
          
          </div>
          <div className="country-postal">
            <div className="country">
            <p className="form-country form-subtitle">Country</p>
            <div className="div-position">
              <p className="form-icono"> <FontAwesomeIcon icon={faGlobeAmericas} /></p>
              <select className="select-country" defaultValue="country">
                <option value="country" disabled hidden>Your country...</option>
                <option value="argentina">Argentina</option>
                <option value="eeuu">Estados Unidos</option>
                <option value="canada">Canada</option>
              </select>
            </div>
          
            </div>
          <div className="postal">
            <p className="form-postal form-subtitle">Postal code</p>
            <div className="div-position">
              <p className="form-icono"> <FontAwesomeIcon icon={faArchive} /></p>
             <input className="input-postal" type="number" placeholder="Your postal code..." />
            </div>
            
          </div>
          </div>
        <input className="save-input" type="checkbox" name="save" />
        <label className="save-label" htmlFor="save">Save this information for the next time</label>
        <button className="button-form">Continue</button>
      </div>
    )
  }
}

export default Form;