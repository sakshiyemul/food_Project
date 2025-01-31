import React from 'react';
import { assets } from '../assets/assets';
const FoodItem = ({ id, name, description, price, image }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">₹ {price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default FoodItem;
