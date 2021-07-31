import React from 'react';
import Sidebar from './components/Sidebar';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import { PeopleFill } from 'react-bootstrap-icons';
import { Redirect } from 'react-router-dom';

const Admin = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <Navbar />
        <div class="main">
          <div class="content p-5">
            <div class="row">
              <div class="col-md-4">
                <div class="card card-customer" width="18rem">
                  <div class="card-body">
                    <h3 class="card-title">50</h3>
                    <p class="card-subtitle mb-2 text-uppercase">`Customer</p>
                    <div class="text-end">
                      <PeopleFill size={50} color="white" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-sale" width="18rem">
                  <div class="card-body">
                    <h3 class="card-title">150</h3>
                    <p class="card-subtitle mb-2 text-uppercase">On `Sale</p>
                    <div class=" text-end">
                      <i class="fas fa-shopping-bag"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-category" width="18rem">
                  <div class="card-body">
                    <h3 class="card-title">6</h3>
                    <p class="card-subtitle mb-2 text-uppercase">`Category</p>
                    <div class=" text-end">
                      <i class="fas fa-tshirt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
