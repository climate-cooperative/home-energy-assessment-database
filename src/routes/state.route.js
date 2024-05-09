const { Router } = require('express');
const stateRouter = Router();

const {
  getAllStates,
  getState,
  getStateFromZipCode,
} = require('../controllers/state.controller');

stateRouter.get('/', getAllStates);

stateRouter.get('/:name', getState);

stateRouter.get("/from-zip-code/:zipcode", getStateFromZipCode);

module.exports = { stateRouter };