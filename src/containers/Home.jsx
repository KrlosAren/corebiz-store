import React, { useContext } from 'react';

// components
import Products from '../components/Products';
import Promotional from '../components/Promotional';
import Product from '../components/Product';
import Spinner from '../components/Spinner';

// styles
import '../static/styles/components/Home/home.scss';

// context
import { AppContext } from '../context/AppContext';

const Home = () => {
  const { products, loading, error, addToCart } = useContext(AppContext);

  const handleAddToCard = (product) => () => {
    addToCart(product);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='home'>
      <Promotional />
      <Products>
        {products?.map((item) => (
          <Product
            item={item}
            key={item.id}
            handleAddToCard={handleAddToCard}
          />
        ))}
      </Products>
    </div>
  );
};

export default Home;
