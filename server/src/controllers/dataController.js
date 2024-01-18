/*
    This file contains the controller functions for the data routes.
    It exports a single function for each route.
*/
const { client } = require('../config/mongodb');
const { connectToCollection, closeConnection } = require('../config/mongodb');

// @desc    appliances route
// @route   GET /api/appliances
// @access  Public
const get_appliances = async (req, res) => {
    try {
        const collection = await connectToCollection('test', 'Appliances');
        const appliances = await collection.find().toArray();
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    hvac_appliances route
// @route   GET /api/hvac_appliances
// @access  Public
const get_hvac_appliances = async (req, res) => {
    try {
        const collection = await connectToCollection('test', 'HVAC Appliances');
        const HVAC_appliances = await collection.find().toArray();
        res.json(HVAC_appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}


// @desc    home_decades route
// @route   GET /api/home_decades
// @access  Public
const get_home_decades = async (req, res) => {
    try {
        const collection = await connectToCollection('test', 'Home Decades');
        const home_decades = await collection.find().toArray();
        res.json(home_decades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    home_type route
// @route   GET /api/home_type
// @access  Public
const get_home_type = async (req, res) => {
    try {
        const collection = await connectToCollection('test', 'Home Type');
        const home_types = await collection.find().toArray();
        res.json(home_types);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    state_table route
// @route   GET /api/state_table
// @access  Public
const get_state_table = async (req, res) => {
    try {
        const collection = await connectToCollection('test', 'State Data');
        const state_table = await collection.find().toArray();
        res.json(state_table);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    state route
// @route   GET /api/state_table/:state
// @access  Public
const get_state = async (req, res) => {
    try {
        const collection = await connectToCollection('Home_Energy_Data', 'State Data');
        // check whether state or state abbreviation was passed in
        // if state abbreviation, convert to state name
        if (req.params.state.length === 2) {
            const state = await collection.findOne({ Abbreviation: req.params.state.toUpperCase() });
            res.json(state);
        } else {
            // Make sure the first character is uppercase
            const state_name = req.params.state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            const state = await collection.findOne({ State: state_name });
            res.json(state);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    zip_table route
// @route   GET /api/zip_table
// @access  Public
const get_zip_table = async (req, res) => {
    try {
        const collection = await connectToCollection('Home_Energy_Data', 'Zip Code Data');
        const zip_table = await collection.find().toArray();
        res.json(zip_table);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    zipcode route
// @route   GET /api/zip_table/:zipcode
// @access  Public
const get_zipcode = async (req, res) => {
    try {
        const collection = await connectToCollection('Home_Energy_Data', 'Zip Code Data');
        const zipcode = await collection.findOne({ Zipcode: req.params.zipcode });
        res.json(zipcode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    state_zipcode route
// @route   GET /api/zip_table/:state
// @access  Public
const get_state_zipcodes = async (req, res) => {
    try {
        const collection = await connectToCollection('Home_Energy_Data', 'Zip Code Data');
        const zipcode = await collection.find({ State: req.params.state }).toArray();
        res.json(zipcode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

// @desc    wood_table route
// @route   GET /api/wood_table
// @access  Public
const get_wood_table = async (req, res) => {
    try {
        const collection = await connectToCollection('Home_Energy_Data', 'Wood Table');
        const wood = await collection.find().toArray();
        res.json(wood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } finally {
        await closeConnection();
    }
}

module.exports = {
    get_appliances,
    get_hvac_appliances,
    get_home_decades,
    get_home_type,
    get_state_table,
    get_state,
    get_zip_table,
    get_zipcode,
    get_state_zipcodes,
    get_wood_table
};