const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { APPLIANCE_TABLE } = require('../constants/tables');
const { DYNAMO_ENDPOINT } = require("../constants/routes");

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }));

// GET /appliances
const getAllAppliances = async (req, res) => {
  try {
    const applainces = await dynamoService.getAll(APPLIANCE_TABLE);
    res.json(applainces.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /appliances/:name
const getAppliance = async (req, res) => {
  try {
    const applaince = await dynamoService.getItem(
      APPLIANCE_TABLE,
      { appliance: req.params.name }
    );
    res.json(applaince.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllAppliances, getAppliance }