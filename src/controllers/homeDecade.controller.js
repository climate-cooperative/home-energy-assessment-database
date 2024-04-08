const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { HOME_DECADE_TABLE } = require('../constants/tables');

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2' }));

// GET /home_decade
const getAllHomeDecades = async (req, res) => {
  try {
    const hpmeDecades = await dynamoService.getAll(HOME_DECADE_TABLE);
    res.json(hpmeDecades.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /state/:name
const getHomeDecade = async (req, res) => {
  try {
    const homeDecade = await dynamoService.getItem(
      HOME_DECADE_TABLE,
      { decade: req.params.name }
    );
    res.json(homeDecade.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getHomeDecade, getAllHomeDecades }