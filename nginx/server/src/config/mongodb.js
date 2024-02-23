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
const fs = require('fs');
const os = require('os');
const path = require('path');

require('dotenv').config();


const mongodb_connection = 'mongodb://dev:password@mongo:27017'

mongoose.connect(mongodb_connection, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection;

const test = conn.useDb('test');
const Home_Energy_Data = conn.useDb('Home_Energy_Data');

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log("Connected to MongoDB!");

  seedDatabase();
});

async function seedDatabase() {
  let dataPath = path.join(__dirname, 'db/Home_Energy_Data');
  let dataFiles = fs.readdirSync(dataPath);

  dataFiles.forEach(file => {
      const collection = file.split('.')[0];
      const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));
      Home_Energy_Data.collection(collection).insertMany(data, (err, result) => {
          if (err) {
          console.log(`Error inserting ${collection}: ${err}`);
          } else {
          console.log(`Inserted ${result.insertedCount} documents into ${collection}`);
          }
      });
  });
  
  dataPath = path.join(__dirname, 'db/test');
  dataFiles = fs.readdirSync(dataPath);

  dataFiles.forEach(file => {
      const collection = file.split('.')[0];
      const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));
      test.collection(collection).insertMany(data, (err, result) => {
          if (err) {
          console.log(`Error inserting ${collection}: ${err}`);
          } else {
          console.log(`Inserted ${result.insertedCount} documents into ${collection}`);
          }
      });
  });
}


module.exports = {
  test,
  Home_Energy_Data
};



