import React from 'react';

// assets
import user from '../static/assets/account.png';

const User = () => (
  <div className='user'>
    <img src={user} alt='user' />
    <p>Minha Conta</p>
  </div>
);

export default User;
