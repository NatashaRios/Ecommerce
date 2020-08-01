import React from 'react';
import Form from '../../componentes/Form';
import Carrito from '../../componentes/Carrito';
import Title from '../../componentes/Title'
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
      </React.Fragment>
    )
  }
}

export default Checkout;

