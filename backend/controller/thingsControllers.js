
const Things = require('../models/things')
const multer = require('multer');
const path = require('path');


// Configure storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images'); // Path to save images
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// Export the upload middleware
exports.upload = multer({ storage: storage });

exports.addThings = async (req, res) => {
  try {
    
    const { name, description, price } = req.body;
    const imagePath = req.file ? `/images/${req.file.filename}` : ''; 

   
    const newThing = new Things({
      name,
      description,
      image: imagePath, 
      price,
    });

    // Save the document to the database
    await newThing.save();
    res.status(200).json({ message: 'Your data has been inserted successfully', data: newThing });
  } catch (error) {
    console.error('Error adding thing:', error);
    res.status(500).json({ message: error.message });
  }
};


exports.getAllThings = async(req,res)=>{
    try {
        const things = await Things.find()
        res.status(200).json({message:things})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

exports.getSpecificThings = async(req,res)=>{
  const {id} = req.params
  try {
    const things = await Things.findById(id)
    res.status(200).json({message:things})
    
  } catch (error) {
    res.status(500).json({message:error})
  }
}


  
  

exports.updateThings = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  
  // Handle the file upload
  const imagePath = req.file ? `/images/${req.file.filename}` : null; // Get the new image path if a file is uploaded
  
  // Prepare the update object
  const updateData = {
    name,
    description,
    price,
  };
  
  if (imagePath) {
    updateData.image = imagePath; // Update the Image field if a new file is uploaded
  }

  try {
    const updatedThing = await Things.findByIdAndUpdate(id, updateData, { new: true }); // Get the updated document
    if (!updatedThing) {
      return res.status(404).json({ message: 'item not found' });
    }
    res.status(200).json({ message: 'item  updated successfully', data: updatedThing });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
};

exports.deleteThings = async (req,res)=>{
    const {id}=req.params
    try {
        const things = await Things.findByIdAndDelete(id)
        res.status(200).json({message:'deleted'})
    } catch (error) {
        res.status(500).json({message:error})
    }
}