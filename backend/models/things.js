const mongoose = require('mongoose')

const thingsSchema = mongoose.Schema({
   name:{type:String},
   description:{type:String},
   price:{type:Number},
   image:{type:String}


})

const Things = mongoose.model('food',thingsSchema)

module.exports = Things