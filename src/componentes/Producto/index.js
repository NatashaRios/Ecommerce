import React from 'react';
import './styles.scss';

class Producto extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      qty: 1
    }
  }


  handleClick(action) {
    const { qty } = this.state;
    const { price, id } = this.props.data;
    const newQty = action == "less" ? qty - 1 : qty + 1
    
    if(newQty > 0) {
      this.props.handleCallback(action, price)
      this.setState({
        qty: newQty
      })
    } else if (newQty == 0) {
      this.props.deleteCallback(id);
    }
    
  }
  render() {
    const { img, title, price } = this.props.data;
    const { qty } = this.state;
    return(
      <div className="product-wrapper">
       <div className="product-img-div">
         <img className="product-img" src={img} />
       </div>
       <div className="product-datos">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price * qty}</p>
        <div className="product-counter"> 
          <button className="product-button-less" onClick={() => this.handleClick("less")} >-</button>
          <p className="product-cant">{qty}</p>
          <button className="product-button-plas" onClick={() => this.handleClick("more")} >+</button>
        </div>
       </div>
      </div>
    )
  }
}

export default Producto;