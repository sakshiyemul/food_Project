import React, { useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { assets } from '../assets/assets';
const FoodDisplay = ({ foodItems }) => { // Accept foodItems as a prop
    const { addToCart } = useContext(FoodContext);

    // Inline styling for the container
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center the cards horizontally
        gap: '20px', // Space between cards
        padding: '20px', // Padding around the container for space
    };

    return (
        <div style={containerStyle}>
            {foodItems.length > 0 ? (
                foodItems.map((food) => (
                    <div key={food._id} className="card" style={{ width: '18rem', margin: '10px' }}>
                        <img
                            src={`http://localhost:5000${food.image}`}
                            className="card-img-top"
                            alt={food.name || "Food Image"}
                            style={{ objectFit: 'cover', height: '200px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{food.name || "No Name Available"}</h5>
                            <p className="card-text">{food.description || "No Description"}</p>
                            <p className="card-text">₹{food.price || "0.00"}</p>
                            <button
                                onClick={() => addToCart(food)}
                                className="btn btn-primary" // Bootstrap class for button
                                style={{
                                    padding: '8px 16px', // Smaller padding for the button
                                    fontSize: '0.9rem', // Smaller font size
                                    backgroundColor: '#0066cc', // Blue color
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px', // Rounded corners
                                    transition: 'all 0.3s ease', // Smooth transition effect (optional)
                                }}
                            >
                                Add to Cart
                                   <img src={assets.basket} alt="Cart" />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No food items available</p>
            )}
        </div>
    );
};

export { FoodDisplay };
export default FoodDisplay;
