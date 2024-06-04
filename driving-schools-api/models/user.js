const mongoose = require('mongoose');
const DrivingSchool = require('./drivingSchool.js'); 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
  },
  password : {
    type: String,
    trim: true,
  },
  drivingSchool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DrivingSchool', 
  },
});

module.exports = mongoose.model('User', userSchema);
