import React, { useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
    const { cart } = useContext(FoodContext);
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((sum, food) => sum + (food.price || 0), 0);

    const [orderDetails, setOrderDetails] = useState({
        name: "",
        address: "",
        paymentMethod: "Cash on Delivery"
    });

    const handleChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order placed successfully!");
        navigate("/"); // Navigate to home after order confirmation
    };

    return (
        <div className="place-order-container" style={{marginTop:'60px'}}>
            <h1>Place Your Order</h1>
            {cart.length > 0 ? (
                <div>
                    <h3>Selected Items:</h3>
                    <ul className="cart-items">
                        {cart.map((food) => (
                            <li key={food._id} className="cart-item">
                                <img src={`http://localhost:5000${food.image}`} alt={food.name} className="food-image" />
                                {food.name} - ₹{food.price}
                            </li>
                        ))}
                    </ul>

                    {/* Total Price Display */}
                    <h3 className="total-amount">Total Amount: ₹{totalPrice.toFixed(2)}</h3>

                    <h3>Enter Your Details</h3>
                    <form onSubmit={handleSubmit} className="order-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={orderDetails.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <textarea name="address" value={orderDetails.address} onChange={handleChange} required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Payment Method:</label>
                            <select name="paymentMethod" value={orderDetails.paymentMethod} onChange={handleChange}>
                                <option value="Cash on Delivery">Cash on Delivery</option>
                                <option value="Credit/Debit Card">Credit/Debit Card</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success">Confirm Order</button>
                    </form>
                </div>
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default PlaceOrder;