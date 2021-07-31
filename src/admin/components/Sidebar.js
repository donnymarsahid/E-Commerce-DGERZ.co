import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import $ from 'jquery';

const Sidebar = () => {
  function clickSale() {
    $('.dropdown-sale').toggleClass('show');
    $('.sale.fas').toggleClass('fa-chevron-right');
    $('.sale.fas').toggleClass('fa-chevron-down');
  }
  function clickCategory() {
    $('.dropdown-category').toggleClass('show');
    $('.category.fas').toggleClass('fa-chevron-down');
    $('.category.fas').toggleClass('fa-chevron-right');
  }
  return (
    <>
      <div class="sidebar">
        <div class="logo d-flex justify-content-center border-bottom">
          <img src={logo} alt="logo-dgerz" />
        </div>
        <div class="dashboard hover mt-5 d-flex">
          <i class="fas fa-tachometer-alt pt-1 pe-2" style={{ color: 'white' }}></i>
          <Link to="/" class="router-sidebar">
            <p>DASHBOARD</p>
          </Link>
        </div>
        <div class="sale mb-3 mt-3">
          <div class="click-sale d-flex justify-content-between" onClick={clickSale} style={{ cursor: 'pointer' }}>
            <p className="ps-1">
              <i class="fas fa-tags pt-1 pe-2" style={{ color: 'white' }}></i>SALE
            </p>
            <i class="sale fas fa-chevron-right" style={{ color: 'white' }}></i>
          </div>
          <ul class="dropdown-sale pt-3 pb-2">
            <li>
              <Link to="/" class="router-sidebar ">
                <p className="hover pb-1">Add Sale</p>
              </Link>
            </li>
            <li>
              <Link to="/" class="router-sidebar ">
                <p className="hover">Edit Sale</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="category">
          <div class="click-category d-flex justify-content-between" onClick={clickCategory} style={{ cursor: 'pointer' }}>
            <p className="ps-1">
              <i class="fas fa-tshirt pt-1 pe-2" style={{ color: 'white' }}></i>CATEGORY
            </p>
            <i class="category fas fa-chevron-right" style={{ color: 'white' }}></i>
          </div>
          <ul class="dropdown-category pt-3 pb-2">
            <li>
              <Link to="/" class="router-sidebar pb-1">
                <p className="hover">Add Category</p>
              </Link>
            </li>
            <li>
              <Link to="/" class="router-sidebar ">
                <p className="hover">Edit Category</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="border-bottom"></div>
        <div class="customer hover mt-5">
          <Link to="/" class="router-sidebar">
            <p>CUSTOMER</p>
          </Link>
        </div>
        <div class="transaction hover">
          <Link to="/" class="router-sidebar">
            <p>TRANSACTION</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
