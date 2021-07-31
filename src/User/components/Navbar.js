import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { Person, Bag, Search, List } from 'react-bootstrap-icons';

const Navbar = () => {
  return (
    <>
      <nav className="shadow-sm d-flex align-items-center fixed-top">
        <div className="container-navbar d-flex align-items-center">
          <div className="profile d-flex">
            <Person size={24} />
            <p class="text-uppercase ps-2 pt-1">account</p>
          </div>
          <div className="logo-nav-link ">
            <div className="logo text-center">
              <img src={logo} alt="logo-dgerz" />
            </div>
            <div className="navbar-link">
              <ul className="d-flex justify-content-evenly">
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">New Arrivals</p>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">Sale</p>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li class="store">
                    <p className="text-uppercase ">Store</p>
                    <div class="box">
                      <p class="pb-3">ABOUT STORE</p>
                      <p class="pb-3">ADDRESS STORE</p>
                    </div>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li class="category">
                    <p className="text-uppercase">Category</p>
                    <div class="box">
                      <p class="pb-3">MAN</p>
                      <p class="pb-3">WOMEN</p>
                      <p class="pb-3">WOMEN DRESSES</p>
                      <p class="pb-3">ACCESSORIES</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="search-cart d-flex justify-content-between">
            <div class="hide"></div>
            <div class="search-and-cart d-flex">
              <div className="search d-flex me-5">
                <Search size={22} class="icon-bars" />
                <p>SEARCH</p>
              </div>
              <div className="cart d-flex ">
                <div className="icon ">
                  <Bag size={22} />
                </div>
                <p>( 0 )</p>
              </div>
            </div>
          </div>
          <div class="hamburger-menu">
            <button class="btn-offcanvas" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop">
              <List size={24} />
            </button>
          </div>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">
                <img src={logo} alt="logo-dgerz" />
              </h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul className="p-0 border-bottom">
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">New Arrivals</p>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">Sale</p>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">Store</p>
                  </li>
                </Link>
                <Link to="/" className="link-router">
                  <li>
                    <p className="text-uppercase">Category</p>
                  </li>
                </Link>
              </ul>
              <p>ACCOUNT</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
