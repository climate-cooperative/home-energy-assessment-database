/**
 * File: api.js
 * Description: This file sets up the routes for the API using Express Router.
 * Each route is associated with a controller function imported from 'dataController.js'.
 * The routes provide access to various data collections such as appliances, hvac appliances, home decades, home type, state table, zip table, and wood table.
 * 
 * @requires express
 * @requires dataController
 * 
 * @exports router
 */
const express = require('express');
const router = express.Router();
// const { 
//     get_appliances,
//     get_hvac_appliances,
//     get_home_decades,
//     get_home_type,
//     get_state_table,
//     get_state,
//     get_zip_table,
//     get_zipcode,
//     get_state_zipcodes,
//     get_wood_table
// } = require('../controllers/dataController');

// // Define routes here
// router.get('/appliances', get_appliances);
// router.get('/hvac_appliances', get_hvac_appliances);

// router.get('/home_decades', get_home_decades);
// router.get('/home_type', get_home_type);

// router.get('/state_table', get_state_table);
// router.get('/state_table/state/:state', get_state);

// router.get('/zip_table', get_zip_table);
// router.get('/zip_table/zipcode/:zipcode', get_zipcode);
// router.get('/zip_table/state/:state', get_state_zipcodes);

// router.get('/wood_table', get_wood_table);

const {
    getAllAppliances
} = require('../controllers/appliances.controller');

router.get('/appliances', getAllAppliances);


module.exports = router;
