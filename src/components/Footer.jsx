import React from 'react';

// assets
import logo from '../static/assets/logo_alt.png';
import vtex from '../static/assets/vtex.png';

// styles
import '../static/styles/components/Footer/footer.scss';

const Footer = () => (
  <div className='footer'>
    <div className='container'>
      <div className='info__location'>
        <h3>Location</h3>
        <div className='direction'>
          <p>Av Andromeda , 2000 Bloco 6 e 8</p>
          <p>Alpavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
      </div>
      <div className='info__contact'>
        <button>entre em cotato</button>
        <button>fale com o nosso consultor online</button>
      </div>
      <div className='info__brand'>
        <img src={logo} alt='logo' />
        <img src={vtex} alt='vtex' />
      </div>
    </div>
  </div>
);

export default Footer;
