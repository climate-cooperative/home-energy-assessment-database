/**
 * File: dataController.js
 * Description: This file defines the controller functions for the API routes.
 * Each function uses Mongoose to query the MongoDB database and sends the results as a JSON response.
 * The functions handle GET requests for various data collections such as appliances, hvac appliances, home decades, home type, state data, zip code data, and densified biomass prices.
 * 
 * @requires mongoose
 * @requires ../models/mongooseModels
 * 
 * @exports get_appliances
 * @exports get_hvac_appliances
 * @exports get_home_decades
 * @exports get_home_type
 * @exports get_state_table
 * @exports get_state
 * @exports get_zip_table
 * @exports get_zipcode
 * @exports get_state_zipcodes
 * @exports get_wood_table
 */

const { 
    Appliances,
    HVAC_Appliances,
    Home_Decades,
    Home_Type,
    State_Data,
    Zip_Code_Data,
    Densified_Biomass_Prices
 } = require('../models/mongooseModels');


// @desc    hvac_appliances route
// @route   GET /api/hvac_appliances
// @access  Public
const get_hvac_appliances = async (_req, res) => {
    try {
        const hvac_appliances = await HVAC_Appliances.find({});
        res.json(hvac_appliances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    home_decades route
// @route   GET /api/home_decades
// @access  Public
const get_home_decades = async (_req, res) => {
    try {
        const home_decades = await Home_Decades.find({});
        res.json(home_decades);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    home_type route
// @route   GET /api/home_type
// @access  Public
const get_home_type = async (_req, res) => {
    try {
        const home_type = await Home_Type.find({});
        res.json(home_type);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// @desc    state_table route
// @route   GET /api/state_table
// @access  Public
const get_state_table = async (_req, res) => {
    try {
        const state_table = await State_Data.find({});
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
const get_zip_table = async (_req, res) => {
    try {
        const zip_table = await Zip_Code_Data.find({});
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
        const zipcode = await Zip_Code_Data.findOne({ Zipcode: req.params.zipcode });
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
const get_wood_table = async (_req, res) => {
    try {
        const wood_table = await Densified_Biomass_Prices.find({});
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
