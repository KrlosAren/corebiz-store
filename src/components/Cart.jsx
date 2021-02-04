import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

// styles
import '../static/styles/components/ShoppingCart/ShoppingCart.scss';

// assets
import cart from '../static/assets/shopping-cart.png';
import { handleSumTotal } from '../utils';

const Cart = () => {
  const { state } = useContext(AppContext);
  const { shoppingCart } = state;

  const [hover, setHover] = useState(false);

  const handleShowCart = () => {
    setHover(!hover);
  };

  const style = {
    display: hover ? 'block' : 'none',
  };

  return (
    <>
      <div className='cart'>
        <img
          src={cart}
          alt='cart'
          className='shopping-card'
          onMouseEnter={handleShowCart}
          onMouseLeave={handleShowCart}
        />
        <div className='cart-items'>
          <p>{shoppingCart.length}</p>
        </div>
      </div>
      <div className='shopping-cart' style={style}>
        {shoppingCart.map((item) => (
          <div className='info-item' key={item.id}>
            <p>{item.product}</p>
            <p>R$ {item.price}</p>
          </div>
        ))}
        <div className='info-total'>
          <p>Total :</p>
          <p>R$ {handleSumTotal(shoppingCart)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
