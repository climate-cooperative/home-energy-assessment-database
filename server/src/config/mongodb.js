/*
  This file contains the code to connect to your MongoDB deployment.
  It exports two things:
    1. The MongoClient object
    2. A function to test the connection of the database
*/

const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const uri = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.MONGO_ENDPOINT}/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
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
    // Connect the client to the server	
    await client.close();
  } 
  catch (err) {
    console.log(err);
  }
}

module.exports = { connectToDatabase, connectToCollection, closeConnection };
