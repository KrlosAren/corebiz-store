import { useState } from 'react';

// dummy data
import initialState from '../initialState';
import fetchData from './useFetchData';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const { loading, products, error } = fetchData();

  const addToCart = (payload) => {
    setState({
      ...state,
      shoppingCart: [...state.shoppingCart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      shoppingCart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    products,
    loading,
    error,
  };
};

export default useInitialState;
