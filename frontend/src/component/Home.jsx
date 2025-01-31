import React, { useState, useEffect } from 'react';
import './Home.css'; 
import { FoodDisplay } from './FoodDisplay'; // Make sure the import is correct
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);

    // Fetch food items from API
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/');
            console.log('API Response:', res.data);
            setFoodItems(res.data.message); // Setting food items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Slice the first 5 items for the featured dishes section
    const featuredFoodItems = foodItems.slice(0, 4);

    return (
        <div>
            <div className="home-container">
                <img src="src/assets/home1.jpg" className="img-fluid full-page-image" alt="Restaurant" />
                <div className="overlay-text">
                    <h1 style={{color:'#fff'}}>Welcome to Swigatto</h1>
                    <p>Experience the finest dining with exquisite cuisines and a warm ambiance.</p>
                    <button type="button" className="btn btn-dark btn-lg">
                        <Link to='/explore' id="ex" style={{ textDecoration: 'none'}}>Explore Now </Link>
                    </button>
                </div>
            </div>

            <h1 className='mt-5 text-center fw-bolder text-dark fs-1'>Featured Dishes</h1>

            {/* Pass only the first 5 foodItems to FoodDisplay */}
            <FoodDisplay foodItems={featuredFoodItems} />
        </div>
    );
};

export default Home;