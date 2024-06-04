const mongoose = require('mongoose');

const drivingSchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // Remove leading/trailing whitespace
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  zipcode : {
    type : Number,
    required : true,
    trim : true,
    index : true,
  },
  state : {
    type : String,
    required : true,
    trim : true,
    index : true
  },
  contactNumber: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('DrivingSchool', drivingSchoolSchema);
