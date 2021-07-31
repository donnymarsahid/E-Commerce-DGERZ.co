import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container-footer">
          <div class="row">
            <div class="col-md-4 about-shop">
              <p>ABOUT THE SHOP</p>
              <p>Dgerz merupakan brand dengan multi produk dan merupakan clothing brand asal Jakarta sejak tahun 2021.</p>
            </div>
            <div class="col-md-4 footer-menu">
              <p>FOOTER MENU</p>
              <ul>
                <Link to="/" class="link-router">
                  <li>
                    <p>Search</p>
                  </li>
                </Link>
                <Link to="/" class="link-router">
                  <li>
                    <p>Contact Us</p>
                  </li>
                </Link>
                <Link to="/" class="link-router">
                  <li>
                    <p>About Us</p>
                  </li>
                </Link>
                <Link to="/" class="link-router">
                  <li>
                    <p>Terms & Conditions</p>
                  </li>
                </Link>
                <Link to="/" class="link-router">
                  <li>
                    <p>Privacy Policy</p>
                  </li>
                </Link>
              </ul>
            </div>
            <div class="col-md-4 subscribe">
              <p>SUBSCRIBE NOW</p>
              <p class="mb-1">Subscribe and get discount 10%</p>
              <input type="email" name="email" placeholder="Enter your email" autoComplete="off" />
              <br />
              <button class="mt-2">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <p class="text-center mt-5">&copy;copyright 2021 | DGERZ `Donny Marsahid</p>
      </footer>
    </>
  );
};

export default Footer;
