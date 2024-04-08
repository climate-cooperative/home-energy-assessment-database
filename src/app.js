/**
 * File: app.js
 * Description: This file sets up the Express server and middleware, imports the API routes, and starts the server.
 * CORS and JSON parsing middleware are used.
 * The server listens on the port specified by the environment variable PORT, or 5000 if PORT is not set.
 * 
 * @requires express
 * @requires cors
 * @requires dotenv
 * @requires ./routes/api
 */

const express = require('express');
const cors = require('cors');
const { router } = require('./routes/api');

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

// Log each request
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request on ${req.url}`);
  next();
});

// Use API routes
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

modules.export = app;
