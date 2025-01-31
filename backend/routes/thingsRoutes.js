const express = require('express');
const { getAllThings, addThings, updateThings, deleteThings, upload, getSpecificThings } = require('../controller/thingsControllers');

const router = express.Router();

// Define the routes
router.get('/', getAllThings);
router.get('/:id',getSpecificThings);
router.post('/add', upload.single('image'), addThings); // 'image' must match the form's file input name
router.put('/update/:id',upload.single('image'), updateThings);
router.delete('/delete/:id', deleteThings);

module.exports = router;
