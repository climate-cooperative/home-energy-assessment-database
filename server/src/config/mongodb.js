/*
  This file contains the code to connect to your MongoDB deployment.
  It exports two things:
    1. The MongoClient object
    2. A function to test the connection of the database
*/
/*
  This file contains the code to connect to your MongoDB deployment.
  It exports two things:
    1. The MongoClient object
    2. A function to test the connection of the database
*/
const mongoose = require('mongoose');
require('dotenv').config();

const mongodb_connection = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.MONGO_ENDPOINT}?retryWrites=true&w=majority`;

console.log(mongodb_connection);

// Connect to MongoDB Atlas
const conn = mongoose.createConnection(mongodb_connection, { useNewUrlParser: true, useUnifiedTopology: true });

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log('Connected to MongoDB Atlas');
  // list dbs
  conn.db.admin().listDatabases(function (err, dbs) {
      console.log(dbs.databases);
  });
});

module.exports = conn;

