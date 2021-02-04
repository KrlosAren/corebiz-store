import { useEffect, useState } from 'react';

// dummy data
import initialState from '../initialState';
import getData from '../utils';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const API =
      'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products';
    const data = getData(API);

    setProducts(data);
  }, []);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    products,
  };
};

export default useInitialState;
