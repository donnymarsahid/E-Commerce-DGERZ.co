import React from 'react';

const CardCategory = ({ category }) => {
  const IMG_URL = 'http://localhost:3001/category/';
  return (
    <>
      <div class="col-md-3">
        <div class="image-overlay">
          <img src={`${IMG_URL}${category.images}`} alt={category.images} width="100%" />
          <div class="overlay"></div>
        </div>
        <p class="text-uppercase text-decoration-underline">{category.name}</p>
      </div>
    </>
  );
};

export default CardCategory;
