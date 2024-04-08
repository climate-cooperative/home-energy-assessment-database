
const { Router } = require('express');
const applianceRouter = Router();

const {
    getAllAppliances,
    getAppliance
} = require('../controllers/appliances.controller');

applianceRouter.get('/', getAllAppliances);

applianceRouter.get('/:name', getAppliance);


module.exports = { applianceRouter };
