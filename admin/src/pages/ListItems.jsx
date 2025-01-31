import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'



const ListItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const navigate = useNavigate()

    // Function to fetch data from the API
    const getData = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/');
            console.log('API Response:', res.data); // Log the response
            setFoodItems(res.data.message);  // Update the state with fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async(id)=>{
        try {
            await axios.delete(`http://localhost:5000/api/delete/${id}`);
            alert('item deleted successfully !!')
           getData()
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData(); // Fetch data when the component mounts
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <div>
            {/* Add margin-top to the heading */}
            <h1 style={{
                textAlign: 'center',
                fontSize: '28px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '30px',
                textTransform: 'uppercase',
                marginTop: '50px', // Added margin-top for spacing from the top
            }}>Food Items</h1>

            {foodItems.length > 0 ? (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((food) => (
                            <tr key={food._id}>
                                <td>
                                    <img
                                        src={`http://localhost:5000${food.image}`}
                                        alt={food.name || "Food Image"}
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                    />
                                </td>
                                <td>{food.name || "No Name Available"}</td>
                                <td>{food.description || "No Description"}</td>
                                <td>₹{food.price || "0.00"}</td>
                                <td>
                                    <button onClick={()=>navigate(`/update/${food._id}`)} className="btn btn-success" style={{ marginRight: '10px' }}>Edit</button>
                                    <button onClick={()=>{handleDelete(food._id)}} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No food items available</p>
            )}
        </div>
    );
};

export default ListItems;