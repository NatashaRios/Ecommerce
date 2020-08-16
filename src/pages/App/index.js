import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
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

    this.state={
      inputValue: "",
      mercadolibre: []
    }
  }

  handleChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  async handleClickSearch(){
    const searchValue = this.state.inputValue;
    const getMl = await axios (`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}e&limit=5`);

    this.setState({
      mercadolibre: getMl.data.results
    })
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
  }
  render() {
    const { mercadolibre } = this.state;
   
    return(
      <React.Fragment>
        <div className='search'>
          <input className='input' onChange={(e) => this.handleChange(e)} type="text" />
          <button className='button' onClick={() => this.handleClickSearch()} >Buscar</button>
        </div>
        <h1 className="title-carousel">Productos</h1>
        <div className="wrapper-carousel">
        <Slider {...this.settings}>
          {mercadolibre.map((product,key) => {
            return(
              <div key={key} onClick={() => this.handleClick(product)} className="content-carousel">
                
                <img className="products-carousel" src={product.thumbnail} />
              
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

