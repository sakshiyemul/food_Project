import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams(); // Get the food item ID from URL parameters
  const navigate = useNavigate();

  const [foodItem, setFoodItem] = useState({
    name: '',
    image: '',
    description: '',
    price: ''
  });

  

  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/${id}`);
      setFoodItem(res.data.message); // Populate state with the fetched food item data
      
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  useEffect(() => {
    getData(); // Fetch food item data when the component mounts
  }, [id]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: value // Dynamically update the corresponding field in the state
    });
  };

  // Handle image file input changes
  const handleImageChange = (e) => {
    setFoodItem({
      ...foodItem,
      image: e.target.files[0] // Store the selected image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', foodItem.name);
    if (foodItem.image) {
      formData.append('image', foodItem.image); // Append the image if it's changed
    }
    formData.append('description', foodItem.description);
    formData.append('price', foodItem.price);

    try {
      const response = await axios.put(`http://localhost:5000/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Item updated successfully!');
      navigate('/listitems'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update the item');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Item</h2>
      <form onSubmit={handleSubmit} className="mx-auto p-4 border rounded shadow-lg" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={foodItem.name || ''} // Ensure value is always defined
            className="form-control"
            id="itemName"
            placeholder="Enter Item Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemDescription" className="form-label">Item Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={foodItem.description || ''} // Ensure value is always defined
            className="form-control"
            id="itemDescription"
            placeholder="Enter Description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="itemImage" className="form-label">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-control"
            id="itemImage"
          />
          {foodItem.image && (
            <div className="mt-2">
              <img
                src={`http://localhost:5000${foodItem.image}`} // Adjust this to match your server's image URL structure
                alt="Food Item"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="itemPrice" className="form-label">Item Price</label>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={foodItem.price || ''} // Ensure value is always defined
            className="form-control"
            id="itemPrice"
            placeholder="Enter Item Price"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Update Item</button>
      </form>
    </div>
  );
};

export default Update;
