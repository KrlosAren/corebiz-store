import React from 'react';

// components
import Cart from './Cart';
import Search from './Search';
import User from './User';

// styles
import '../static/styles/components/Menu/menu.scss';

// assets
import logo from '../static/assets/logo.png';

const Menu = () => (
  <nav className='container'>
    <div className='logo'>
      <img src={logo} alt='corebiz' />
    </div>
    <Search />
    <User />
    <Cart />
  </nav>
);

export default Menu;
