import React from 'react';
import './ShoppingCart.css';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux'; //useSelector used to extract data from the Redux store.

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleRemoving = itemId => {
    dispatch(removeItemFromCart(itemId));

  }
  const handleClearing = () => {
    dispatch(clearCart());
  }
  const handleIncreasing = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  }
  const handleDecreasing = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  }
  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li className="cart-item" key={item.id}><span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button className="quantity-control-btn" onClick={() => handleDecreasing(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button className="quantity-control-btn" onClick={() => handleIncreasing(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoving(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearing}>Clear Cart</button>
        <div>
          {totalAmount ? (<div>the total amount is ${totalAmount}</div>) : ' '}
        </div>
      </div>

    </>
  );
};

export default ShoppingCart;
