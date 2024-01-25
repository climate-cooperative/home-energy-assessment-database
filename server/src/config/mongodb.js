/**
 * File: mongodb.js
 * Description: This file sets up the MongoDB connection using Mongoose and exports the database instances.
 * The connection string is constructed using environment variables.
 * Two databases 'test' and 'Home_Energy_Data' are accessed through this connection.
 * 
 * @requires mongoose
 * @requires dotenv
 * 
 * @exports test
 * @exports Home_Energy_Data
 */

const mongoose = require('mongoose');
require('dotenv').config();

const mongodb_connection = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.MONGO_ENDPOINT}?retryWrites=true&w=majority`;

mongoose.connect(mongodb_connection, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log("Connected to MongoDB!");
});

// Use different databases
const test = conn.useDb('test');
const Home_Energy_Data = conn.useDb('Home_Energy_Data');
  

module.exports = {
  test,
  Home_Energy_Data
};

