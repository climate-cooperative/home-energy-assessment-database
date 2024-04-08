const { Router } = require('express');
const hvacRouter = Router();

const {
  getAllHvacs,
  getHvac
} = require('../controllers/hvac.controller');

hvacRouter.get('/', getAllHvacs);

hvacRouter.get('/:name', getHvac);


module.exports = { hvacRouter };