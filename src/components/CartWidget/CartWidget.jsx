import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/images/cart.png';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <>
      <Link to="/cart">
        <img src={cartLogo} alt="cart" width={32} height={32} />
        <button style={{ backgroundColor: '#e4c360', border: 'none' }}>{getQuantity()}</button>
      </Link>
    </>
  );
};

export default CartWidget;
