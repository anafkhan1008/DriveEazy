const mongoose = require('mongoose');
const DrivingSchool = require('./models/drivingSchool'); // Assuming your model is in models/drivingSchool.js

const indianCities = [
  {
    name: 'ABC Driving School',
    address: '123 Main Street, Indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    zipcode: 452001, 
    phone: '+91 1234567890',
    email: 'contact@abcdriving.com',
    website: 'http://www.abcdriving.com'
  },
  {
    name: 'DEF Driving Academy',
    address: '456 Elm Street, Bhopal',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    zipcode: 462001,
    phone: '+91 9876543210',
    email: 'info@defdrivingacademy.com',
    website: 'http://www.defdrivingacademy.com'
  },

  {
    name: 'MNO Driving Institute',
    address: '789 Queens Road, Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipcode: 400001, 
    phone: '+91 8765432190',
    email: 'contact@mnodrivinginstitute.com',
    website: 'http://www.mnodrivinginstitute.com'
  },
  {
    name: 'Anaf driving school',
    address: '789 Queens Road, Mumbai',
    city: 'chanderi',
    state: 'Maharashtra',
    zipcode: 400001, 
    phone: '+91 8765432190',
    email: 'contact@mnodrivinginstitute.com',
    website: 'http://www.mnodrivinginstitute.com'
  },
  {
    name: 'Mohit driving school',
    address: '789 Queens Road, Mumbai',
    city: 'chanderi',
    state: 'Maharashtra',
    zipcode: 400001, 
    phone: '+91 8765432190',
    email: 'contact@mnodrivinginstitute.com',
    website: 'http://www.mnodrivinginstitute.com'
  }

];

async function seedDatabase() {
  try {
    // await DrivingSchool.deleteMany({});

    console.log('Seeding database with sample driving schools...');
    await DrivingSchool.insertMany(indianCities);
    console.log('Seeding complete!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
