/*
  This file contains the code to connect to your MongoDB deployment.
  It exports two things:
    1. The MongoClient object
    2. A function to test the connection of the database
*/

const { MongoClient, ServerApiVersion } = require('mongodb');
const { mongodb_connection } = require('../static/constants');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongodb_connection, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function testConnectionToDB() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

async function appendToStateArrays(state, data){
  try {
    const collection = await connectToCollection('Home_Energy_Data', 'State Data');
    // append data to the state emissions array
    await collection.updateOne(
      { Abbreviation: state },
      { $push: 
        { 
          'State Emissions': data['State Emissions'],
          'State Energy Costs': data['State Energy Costs'],
          'State Energy Breakdown': data['State Energy Breakdown']
        } 
      },
    );
  } 
  catch (err) {
    console.log(err);
  } finally {
    await closeConnection();
  }
}

async function connectToCollection(dbname, collectionName) {
  try {
    // Connect the client to the server	
    await client.connect();
    // Send a ping to confirm a successful connection
    const collection = await client.db(dbname).collection(collectionName);
    return collection;
  } 
  catch (err) {
    console.log(err);
  }
}

async function closeConnection() {
  try {
    await client.close();
  } 
  catch (err) {
    console.log(err);
  }
}

module.exports = { 
  testConnectionToDB,
  connectToCollection,
  closeConnection,
  appendToStateArrays
};
