import React, { Component } from 'react';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import api from '../api/server';
import CardSale from './cards/CardSale';
import CardCategory from './cards/CardCategory';

import ourLook from './assets/img/our-look.png';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sale: [],
      category: [],
    };
  }

  componentDidMount() {
    api
      .get('/sale/')
      .then((res) => {
        this.setState({
          sale: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get('/category/')
      .then((res) => {
        this.setState({
          category: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const cardSale = this.state.sale.map((sale) => {
      return <CardSale sale={sale} key={sale.id} />;
    });
    const cardCategory = this.state.category.map((category) => {
      return <CardCategory category={category} key={category.id} />;
    });
    return (
      <>
        <title>DGERZ.co</title>
        <Navbar />
        <header>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <p class="text-uppercase">SPRING SUMMER `21</p>
              <h3 class="text-uppercase">NEW THIS WEEK</h3>
              <button>READY TO SHOP</button>
            </div>
          </div>
        </header>
        <section>
          <div class="container-onsale">
            <h3 class="text-center">ON`SALE</h3>
            <div class="row mt-3">{cardSale}</div>
            <div class="d-flex justify-content-center mt-5">
              <button class="text-center">VIEW ALL PRODUCTS</button>
            </div>
          </div>
        </section>
        <div class="content">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <p class="text-uppercase"></p>
              <h3 class="text-uppercase">NEWEST `PRODUCTS</h3>
              <button>CHECK HERE</button>
            </div>
          </div>
        </div>
        <section>
          <div class="container-category">
            <h3 class="text-center">SHOP BY `CATEGORY</h3>
            <div class="row mt-3">{cardCategory}</div>
          </div>
        </section>
        <div class="our-look">
          <p class="text-center">GET INSPIRED</p>
          <h3 class="text-center title">OUR `LOOK</h3>
          <div class="d-flex justify-content-center mt-5">
            <div class="image">
              <img src={ourLook} alt="products" width="100%" />
            </div>
            <div class="shop-detail">
              <div class="title">
                <h3>CATCH ME BLACK LONGSLEEVE T-SHIRT</h3>
              </div>
              <div class="price d-flex">
                <p class="text-danger ">IDR 159.000</p>
                <p class="text-decoration-line-through text-danger ms-3"> 259.000</p>
              </div>
              <div class="quantity"></div>
              <button class="mb-2 btn-shop-detail add-cart">ADD TO CART</button>
              <br />
              <button class="mb-2 btn-shop-detail">SHOP NOW</button>
            </div>
          </div>
        </div>
        <div class="promo d-flex justify-content-center align-items-center flex-column">
          <p>GET DISCOUNT 15%</p>
          <p>Sign up to get a discount for the first order</p>
          <button>SIGN UP</button>
        </div>
        <Footer />
      </>
    );
  }
}
