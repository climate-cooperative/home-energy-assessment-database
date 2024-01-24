/*
    This file contains the controller functions for the data routes.
    It exports a single function for each route.
*/
const { 
    Appliances,
    HVAC_Appliances,
    Home_Decades,
    Home_Type,
    State_Data,
    Zip_Code_Data,
    Wood_Table
 } = require('../models/mongooseModels');

// @desc    appliances route
// @route   GET /api/appliances
// @access  Public
const get_appliances = async (req, res) => {
    try {
        const appliances = await Appliances.find({});
        res.json(appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    hvac_appliances route
// @route   GET /api/hvac_appliances
// @access  Public
const get_hvac_appliances = async (req, res) => {
    try {
        const hvac_appliances = await HVAC_Appliances.find();
        res.json(hvac_appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    home_decades route
// @route   GET /api/home_decades
// @access  Public
const get_home_decades = async (req, res) => {
    try {
        const home_decades = await Home_Decades.find();
        res.json(home_decades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    home_type route
// @route   GET /api/home_type
// @access  Public
const get_home_type = async (req, res) => {
    try {
        const home_type = await Home_Type.find();
        res.json(home_type);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    state_table route
// @route   GET /api/state_table
// @access  Public
const get_state_table = async (req, res) => {
    try {
        const state_table = await State_Data.find();
        res.json(state_table);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    state route
// @route   GET /api/state_table/state/:state
// @access  Public
const get_state = async (req, res) => {
    try {
        const state = await State_Data.findOne({ State: req.params.state });
        res.json(state);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    zip_table route
// @route   GET /api/zip_table
// @access  Public
const get_zip_table = async (req, res) => {
    try {
        const zip_table = await Zip_Code_Data.find();
        res.json(zip_table);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    zipcode route
// @route   GET /api/zip_table/zipcode/:zipcode
// @access  Public
const get_zipcode = async (req, res) => {
    try {
        const zipcode = await Zip_Code_Data.findOne({ Zip_Code: req.params.zipcode });
        res.json(zipcode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    state_zipcodes route
// @route   GET /api/zip_table/state/:state
// @access  Public
const get_state_zipcodes = async (req, res) => {
    try {
        const state_zipcodes = await Zip_Code_Data.find({ State: req.params.state });
        res.json(state_zipcodes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    wood_table route
// @route   GET /api/wood_table
// @access  Public
const get_wood_table = async (req, res) => {
    try {
        const wood_table = await Wood_Table.find();
        res.json(wood_table);
    } catch (err) {
        res.status(500).json({ message: err.message });
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