import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
