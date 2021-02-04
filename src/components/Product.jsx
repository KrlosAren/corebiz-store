import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// styles
import '../static/styles/components/Product/product.scss';

const Product = ({ item, handleAddToCard }) => {
  const { img, sku, product, description, category, price, color } = item;

  return (
    <div className='carousel-item'>
      <img
        src={img}
        alt={product}
        onLoad={(e) => {
          e.target.src =
            'https://dummyimage.com/200x200/e6e6e6/e6e6e6.jpg&text=Not+Img';
        }}
      />
      <div className='item-info'>
        <h5 className='info-title'>{product}</h5>
        <p className='info-description'>{description}</p>
        <p className='info-price'>Por R$ {price}</p>
        <p className='info-sku'>{sku}</p>
        <button className='btn' type='button' onClick={handleAddToCard(item)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;
