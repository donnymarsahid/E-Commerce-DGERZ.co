import React, { Fragment, useState } from 'react';
import Footer from '../User/components/Footer';
import Navbar from '../User/components/Navbar';
import './css/style.css';
import api from '../api/server';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);

  const [status, setStatus] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .post('/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.message) {
          setStatus(res.data.message);
        } else {
          localStorage.setItem('token', res.data.token);
          setRedirect(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Fragment>
        {redirect && <Redirect to="/admin" />}
        <title>Login | DGERZ.co</title>
        <Navbar />
        <div class="login d-flex justify-content-center align-items-center">
          <div class="container-login d-flex justify-content-center align-items-center">
            <form class="form-input" onSubmit={handlerSubmit}>
              <h3 className="text-center">SIGN IN</h3>
              {status && (
                <div class="alert alert-success" role="alert">
                  {status}
                </div>
              )}
              <label for="username" class="mt-3">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <br />
              <label for="password" class="mt-3">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="at least 8 characters"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <p className="text-end">Forget Password?</p>
              <button type="submit" class="mt-2">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </Fragment>
    </>
  );
};

export default Login;
