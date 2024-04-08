const { Router } = require('express');
const zipcodeRouter = Router();

const {
  getZipcode,
  getAllZipcodes
} = require('../controllers/zipcode.controller');

zipcodeRouter.get('/', getAllZipcodes);

zipcodeRouter.get('/:value', getZipcode);


module.exports = { zipcodeRouter };