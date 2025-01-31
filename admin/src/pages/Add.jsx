import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const [price,setPrice]=useState('')
    const navigate=useNavigate()

    const sendData=async(e)=>{
         e.preventDefault();
        
         const formData=new FormData();
            formData.append('name',name);
            formData.append('description',description);
            formData.append('image',image);
            formData.append('price',price);
        

          try{
            await axios.post('http://localhost:5000/api/add/',formData,{
              headers:{
                'Content-Type':'multipart/form-data',
              },
            });
            alert('Inserted Successfully!!');
            navigate('/ListItems')
          }catch(error){
            console.error('Error uploading data',error);
            alert('Failed to insert data');
          }

        };
   

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Item</h2>
      <form  onSubmit={sendData} className="mx-auto p-4 border rounded shadow-lg" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Item Name</label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} className="form-control" id="fullName" placeholder="Enter Item Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Item Description</label>
          <input type="text" onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="desc" aria-describedby="emailHelp" placeholder="Enter Description" />
        </div>   
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Image</label>
          <input type="file" name='image' onChange={(e)=>{setImage(e.target.files[0])}} className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Item Price</label>
          <input type="text" onChange={(e)=>{setPrice(e.target.value)}} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Item Price" />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Item</button>
      </form>
      <br/>
    </div>
    
  )
}

export default Add;
