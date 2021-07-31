import React from 'react';
import Footer from '../User/components/Footer';
import Navbar from '../User/components/Navbar';

const NoMatch = () => {
  return (
    <>
      <Navbar />
      <div class="nomatch d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100vh' }}>
        <h1>PAGE NOT FOUND | 404</h1>
      </div>
      <Footer />
    </>
  );
};

export default NoMatch;
