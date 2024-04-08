const { Router } = require('express');
const hometypeRouter = Router();

const {
  getAllHomeTypes,
  getHomeType
} = require('../controllers/homeType.controller');

hometypeRouter.get('/', getAllHomeTypes);

hometypeRouter.get('/:type', getHomeType)


module.exports = { hometypeRouter };