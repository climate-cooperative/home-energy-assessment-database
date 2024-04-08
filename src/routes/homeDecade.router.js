const { Router } = require('express');
const homeDecadeRouter = Router();

const {
  getAllHomeDecades,
  getHomeDecade
} = require('../controllers/homeDecade.controller');

homeDecadeRouter.get('/', getAllHomeDecades);

homeDecadeRouter.get('/:decade', getHomeDecade)


module.exports = { homeDecadeRouter };