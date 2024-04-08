const { Router } = require('express');
const stateRouter = Router();

const { getAllStates, getState } = require('../controllers/state.controller');


stateRouter.get('/', getAllStates);

stateRouter.get('/:name', getState);


module.exports = { stateRouter };