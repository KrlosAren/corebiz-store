import React from 'react';
// styles
import '../static/styles/components/Products/products.scss';

const Products = ({ children }) => (
  <div className='container'>
    <div className='carousel'>
      <div className='carousel__container'>{children}</div>
    </div>
  </div>
);

export default Products;
