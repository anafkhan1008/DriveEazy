const express = require('express');
const router = express.Router();
const DrivingSchool = require('../models/drivingSchool')
const User = require("../models/user")



router.post('/search', async (req, res) => {
  const { city } = req.body;
  console.log(req.body)
  try {
    const schools = await DrivingSchool.find({ city: city });
    res.json(schools);
  } catch (err) {
    console.error('Error searching for schools:', err);
    res.status(500).json({ error: 'Error searching for schools' });
  }
});

router.get('/search', async (req, res) => {
  const { id } = req.query;
  console.log(id)
  try {
    const schools = await DrivingSchool.find({ city: id });
    res.json(schools);
    console.log(schools)
  } catch (err) {
    console.error('Error searching for schools:', err);
    res.status(500).json({ error: 'Error searching for schools' });
  }
});

router.get('/school', async (req, res) => {
    const { id } = req.query; 
  
    console.log(id); // Optional for debugging
  
    try {
      const school = await DrivingSchool.findById(id);
      if (!school) {
        return res.status(404).json({ error: 'School not found' });
      }
      res.json(school);
    } catch (err) {
      console.error('Error searching for school:', err);
      res.status(500).json({ error: 'Error searching for school' });
    }
  });


  router.get('/searchbyid', async (req, res) => {
    const { id } = req.query;
    console.log(id)
    try {
      const school = await DrivingSchool.findById(id);
      res.json(school);
      console.log(school)
    } catch (err) {
      console.error('Error searching for schools:', err);
      res.status(500).json({ error: 'Error searching for schools' });
    }
  });

  router.post('/adddrivingschool', async (req, res) => {
    try {
      // Extract data from request body
      const { email, name, drivingSchoolData } = req.body;
      console.log(req.body)
  
      // Create a new driving school object
      const drivingSchool = new DrivingSchool({
        ...drivingSchoolData,
        userEmail: email,
        userName: name
      });
  
      // Save the driving school to the database
      await drivingSchool.save();
  
      res.status(201).json({ message: 'Driving school added successfully', drivingSchool });
    } catch (error) {
      console.error('Error adding driving school', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



module.exports = router;