const { Router } = require('express');
const biomassRouter = Router();

const {
  getAllBiomass,
  getBiomass
} = require('../controllers/biomass.controller');

biomassRouter.get('/', getAllBiomass);

biomassRouter.get('/:name', getBiomass)


module.exports = { biomassRouter };