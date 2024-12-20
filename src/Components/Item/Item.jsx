import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="item-image" src={props.image} alt={props.name} />
      </Link>
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price} Rs</div>
        <div className="item-price-old">{props.old_price} Rs</div>
      </div>
    </div>
  );
};

export default Item;
