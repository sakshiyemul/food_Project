import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FoodDisplay from './FoodDisplay';
import './Explore.css';

const Explore = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredFood, setFilteredFood] = useState([]);

    // Fetch food items from API
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/');
            console.log("API Full Response:", res.data);
            console.log("Extracted Message Data:", res.data.message);

            if (Array.isArray(res.data.message)) {
                setFoodItems(res.data.message);
                setFilteredFood(res.data.message); // Initially show all items
            } else {
                console.error("Unexpected API response format:", res.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Function to filter food items when search button is clicked
    const handleSearch = () => {
        const results = foodItems.filter(food =>
            food.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (maxPrice === "" || Number(food.price) <= Number(maxPrice)) // Ensure price is a number
        );
        setFilteredFood(results);
    };

    return (
        <div className="explore-container">
            <h1 className="title" id="ex">Explore Our Dishes</h1>

            {/* Search & Filter Section */}
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="Search for a dish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="price-input"
                />
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>

            {/* Display Filtered Food Items */}
            <FoodDisplay foodItems={filteredFood} /> 
        </div>
    );
};

export default Explore;