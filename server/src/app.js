/*
  This is the main file of the server.
  It contains the code to start the server and connect to MongoDB Atlas.
  It also contains the code to use the API routes.
*/
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/mongodb');
const apiRoutes = require('./routes/api');
// const scheduler = require('./jobs/scheduler');

require('dotenv').config();

const app = express();
// Middleware
app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
));
app.use(express.json());

// Connect to MongoDB Atlas
connectToDatabase();

// Start the scheduled task
// scheduler(); 

// Use API routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
