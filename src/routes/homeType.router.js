const { Router } = require('express');
const homeTypeRouter = Router();

const {
  getAllHomeTypes,
  getHomeType
} = require('../controllers/homeType.controller');

homeTypeRouter.get('/', getAllHomeTypes);

homeTypeRouter.get('/:type', getHomeType)


module.exports = { homeTypeRouter };