/**
 * File: app.js
 * Description: This file sets up the Express server and middleware, imports the API routes, and starts the server.
 * CORS and JSON parsing middleware are used.
 * The server listens on the port specified by the environment variable PORT, or 5000 if PORT is not set.
 * 
 * @requires express
 * @requires cors
 * @requires dotenv
 * @requires ./routes/api
 */

const express = require('express');
const cors = require('cors');
const {
  APPLIANCE_ROUTE,
  HVAC_ROUTE,
  HOME_DECADE_ROUTE,
  HOME_TYPE_ROUTE,
  STATE_ROUTE,
  ZIPCODE_ROUTE,
  BIOMASS_ROUTE
} = require('./constants/routes');

const { applianceRouter } = require('./routes/appliance.router');
const { biomassRouter } = require('./routes/biomass.router');
const { homeDecadeRouter } = require('./routes/homeDecade.router');
const { homeTypeRouter } = require('./routes/homeType.router');
const { hvacRouter } = require('./routes/hvac.router');
const { stateRouter } = require('./routes/state.route');
const { zipcodeRouter } = require('./routes/zipcode.router');

require('dotenv').config();

const app = express();
// Middleware
app.use(cors(
  {
    origin: process.env.CORS_ORIGIN,
    credentials: true
  }
));

// json parser
app.use(express.json());

// Log each request
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request on ${req.url}`);
  next();
});

// Use API routes
app.use(APPLIANCE_ROUTE, applianceRouter);
app.use(BIOMASS_ROUTE, biomassRouter);
app.use(HOME_DECADE_ROUTE, homeDecadeRouter);
app.use(HOME_TYPE_ROUTE, homeTypeRouter);
app.use(HVAC_ROUTE, hvacRouter);
app.use(STATE_ROUTE, stateRouter);
app.use(ZIPCODE_ROUTE, zipcodeRouter);

// export to use start elsewhere
module.exports = app;
