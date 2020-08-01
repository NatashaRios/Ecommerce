import React, { Fragment } from 'react';
import products from '../../data/products.json';
import './styles.scss';

class Total extends React.Component{
  
  render() {
    const { totalPrice } = this.props;
    return(
      <React.Fragment>
        <div className="total-shipping">
          <span className="total-shipping-title">Shipping</span>
          <p className="total-result-shipping">$19</p>
        </div>
        <div className="total-total">
          <span className="total-total-title">Total</span>
          <p className="total-result-total">${totalPrice}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Total;