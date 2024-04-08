const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { HVAC_TABLE } = require('../constants/tables');

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2' }));

// GET /hvac
const getAllHvacs = async (req, res) => {
  try {
    const hvacs = await dynamoService.getAll(HVAC_TABLE);
    res.json(hvacs.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /hvac/:name
const getHvac = async (req, res) => {
  try {
    const hvac = await dynamoService.getItem(
      HVAC_TABLE,
      { display_name: req.params.name }
    );
    res.json(hvac.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getHvac, getAllHvacs }