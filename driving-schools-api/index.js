const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const seedDB = require('./seed');


const searchRoutes = require('./routes/search')
const authRoutes = require('./routes/auth')



const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('Error in connecting to DB', err);
    });


app.use(express.json())
app.use(cors());

app.use(searchRoutes);
app.use(authRoutes);



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});