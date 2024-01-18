/*
  This is the main file of the server.
  It contains the code to start the server and connect to MongoDB Atlas.
  It also contains the code to use the API routes.
*/
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { testConnectionToDB } = require('./config/mongodb');
const { port } = require('./static/constants');

const app = express();
// Middleware
app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
));
app.use(express.json());

// Test connection to MongoDB Atlas
testConnectionToDB();

// Use API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
