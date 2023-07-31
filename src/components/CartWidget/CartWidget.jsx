import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/images/cart.png';

const CartWidget = () => {

  return (
    <>
      <img src={cartLogo} alt="cart" width={32} height={32} />
      <button style={{ backgroundColor: '#e4c360', border: 'none' }}>{3}</button>
    </>
  );
};

export default CartWidget;
