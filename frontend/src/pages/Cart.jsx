import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, removeFromCart } = useContext(FoodContext);
    const navigate = useNavigate();

    // Calculate Total Price
    const totalPrice = cart.reduce((sum, food) => sum + (food.price || 0), 0);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Shopping Cart</h1>
            {cart.length > 0 ? (
                <>
                    {/* Cart Items Grid */}
                    <div style={styles.cartGrid}>
                        {cart.map((food, index) => (
                            <div key={food._id} style={styles.card}>
                                <img
                                    src={`http://localhost:5000${food.image}`}
                                    style={styles.image}
                                    alt={food.name || "Food Image"}
                                />
                                <div style={styles.cardBody}>
                                    <h5 style={styles.cardTitle}>{food.name || "No Name Available"}</h5>
                                    <p style={styles.cardText}>{food.description || "No Description"}</p>
                                    <p style={styles.cardPrice}>₹{food.price || "0.00"}</p>
                                    
                                    <button onClick={() => removeFromCart(index)} style={styles.removeButton}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Price Display */}
                    <div style={styles.totalContainer}>
                        <h3 style={styles.totalPrice}>Total: ₹{totalPrice.toFixed(2)}</h3>
                    </div>

                    {/* Centered "Place Order" Button */}
                    <div style={styles.buttonContainer}>
                        <button onClick={() => navigate('/placeorder')} style={styles.placeOrderButton}>
                            Place Order
                        </button>
                    </div>
                </>
            ) : (
                <p style={styles.emptyCartText}>Your cart is empty</p>
            )}
        </div>
    );
};

// Responsive Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto"
    },
    heading: {
        fontSize: "2rem",
        marginBottom: "20px"
    },
    cartGrid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center"
    },
    card: {
        width: "100%",
        maxWidth: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        backgroundColor: "#fff"
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "cover"
    },
    cardBody: {
        padding: "15px"
    },
    cardTitle: {
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    cardText: {
        fontSize: "1rem",
        color: "#555"
    },
    cardPrice: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#27ae60"
    },
    removeButton: {
        backgroundColor: "#e74c3c",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        marginTop: "10px"
    },
    totalContainer: {
        marginTop: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold"
    },
    totalPrice: {
        color: "#333"
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px"
    },
    placeOrderButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        fontSize: "1.2rem",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "0.3s"
    },
    emptyCartText: {
        fontSize: "1.5rem",
        color: "#555",
        marginTop: "20px"
    }
};

export default Cart;