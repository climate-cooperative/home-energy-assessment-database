/*

This file defines the routes for the API. The routes are defined using the express router.

*/

const express = require('express');
const router = express.Router();
const { appliances, hvac_appliances, home_decades, home_type, state_table, zip_table } = require('../controllers/dataController');

// Define routes here
router.get('/appliances', appliances);
router.get('/hvac_appliances', hvac_appliances);
router.get('/home_decades', home_decades);
router.get('/home_type', home_type);
router.get('/state_table', state_table);
router.get('/zip_table', zip_table);

module.exports = router;
