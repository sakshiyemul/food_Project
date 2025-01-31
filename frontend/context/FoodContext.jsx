import { createContext, useState,useEffect } from "react";

export const FoodContext = createContext();

const FoodContextProvider = (props)=>{

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('cart'))
        setCart(storedCart)
    },[]);

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);

    const addToCart = (food) => {
        setCart((prevCart) => [...prevCart, food]);
    };

    const removeFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const value = {
        cart,setCart,
        addToCart,
        removeFromCart
    }

    return(
        <FoodContext.Provider value={value}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider