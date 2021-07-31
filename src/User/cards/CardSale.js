import React from 'react';

const CardSale = ({ sale }) => {
  const IMG_URL = 'http://localhost:3001/sale/';
  return (
    <>
      <div class="col-md-3">
        <div class="image-overlay">
          <img src={`${IMG_URL}${sale.images}`} alt={sale.images} width="100%" />
          <div class="overlay"></div>
        </div>
        <p class="text-uppercase">{sale.name}</p>
        <p class="text-danger">IDR {sale.price}</p>
        <p class="text-decoration-underline">SHOP NOW</p>
      </div>
    </>
  );
};

export default CardSale;
