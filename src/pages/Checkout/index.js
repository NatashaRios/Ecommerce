import React from 'react';
import Form from '../../componentes/Form';
import Carrito from '../../componentes/Carrito';
import Title from '../../componentes/Title'
import { Link } from 'react-router-dom';
import './styles.scss';

class Checkout extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Title />
        <div className="wrapper">
          <Form />
          <Carrito />
        </div>
        <Link to="/">
          <p className='back'>Volver atrás</p>
        </Link>
      </React.Fragment>
    )
  }
}

export default Checkout;

