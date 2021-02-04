import { useState, useEffect } from 'react';
import { getData } from '../utils';

const fetchData = () => {
  const API =
    'https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products';

  const [products, setProducts] = useState({
    loading: true,
    products: [],
  });

  useEffect(() => {
    getData(API)
      .then((response) => {
        setProducts({
          products: response,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        setProducts({
          loading: false,
          error,
        });
      });
  }, []);

  return products;
};

export default fetchData;
