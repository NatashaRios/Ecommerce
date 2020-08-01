import React from 'react';
import Slider from 'react-slick';
import products from '../../data/products.json';
import { Link } from 'react-router-dom';
import './styles.scss';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.settings = {
      slidesToShow: 4,
      slideToScroll: 4,
      variableWidth: true,
      accesibility: true,
      infinit: true,
      arrows: true
    }
  }

  handleClick(product) {
    const stringifiedCart = localStorage.getItem("cart");

    if(stringifiedCart) {
      const parsedCart = JSON.parse(stringifiedCart);
      parsedCart.push(product);
      const newCart = JSON.stringify(parsedCart);
      localStorage.setItem("cart", newCart);
    } else {
      const parsedCart = [product];
      const newCart = JSON.stringify(parsedCart);
      localStorage.setItem("cart", newCart);
    }
    this.props.history.push("/checkout");
    console.log(product);
  }
  render() {
    return(
      <React.Fragment>
        <h1 className="title-carrousel">Productos</h1>
        <div className="wrapper-carrousel">
        <Slider {...this.settings}>
          {products.map((product,key) => {
            return(
              <div key={key} onClick={() => this.handleClick(product)} className="content-carrousel">
                
                <img className="products-carrousel" src={product.img} />
              
              </div>
            )
          })}
            
        </Slider>
        </div>
        </React.Fragment>
    )
  }
}

export default App;

/* hacer el localstorage
hacer un handleclick que me redicciona aca: history.push("/checkout")
aca se guarda this.props.history.push("/checkout) */