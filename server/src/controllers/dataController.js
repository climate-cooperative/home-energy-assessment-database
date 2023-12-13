/*

    This file contains the controller functions for the data routes.
    It exports a single function for each route.

*/

const { client } = require('../config/mongodb');


// @desc    appliances route
// @route   GET /api/appliances
// @access  Public
const appliances = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data');
        const collection = db.collection('Appliances');

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}

// @desc    hvac_appliances route
// @route   GET /api/hvac_appliances
// @access  Public
const hvac_appliances = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data');
        const collection = db.collection('HVAC Appliances');

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}


// @desc    home_decades route
// @route   GET /api/home_decades
// @access  Public
const home_decades = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data'); 
        const collection = db.collection('Home Decades'); 

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}

// @desc    home_type route
// @route   GET /api/home_type
// @access  Public
const home_type = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data'); 
        const collection = db.collection('Home Type'); 

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}

// @desc    state_table route
// @route   GET /api/state_table
// @access  Public
const state_table = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data');
        const collection = db.collection('State table data'); 

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}

// @desc    zip_table route
// @route   GET /api/zip_table
// @access  Public
const zip_table = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Home-Energy-Data'); 
        const collection = db.collection('Zip Code Data'); 

        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await client.close();
    }
}

module.exports = { appliances, hvac_appliances, home_decades, home_type, state_table, zip_table };