import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img className="item-image" src={image} alt={name} />
      </Link>
      <p className="item-name">{name}</p>
      <div className="item-prices">
        <div className="item-price-new">{new_price} Rs</div>
        <div className="item-price-old">{old_price} Rs</div>
      </div>
    </div>
  );
};

export default Item;
