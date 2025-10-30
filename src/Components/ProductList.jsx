import React from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItemToCart } from './CartSlice';
const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];
  const dispatch = useDispatch(); //important for patching any action
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]);
  }
  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((item) => (
          <li key={item.id} className="product-list-item">{item.name} - {item.price}
            <button className={`add-to-cart-btn ${disabledProducts.includes(item.id) ? 'disabled' : ''}`}
              onClick={() => handleAddToCart(item)}
              disabled={disabledProducts.includes(item.id)}> {disabledProducts.includes(item.id) ? 'Added' : 'Add To Cart'}</button></li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
