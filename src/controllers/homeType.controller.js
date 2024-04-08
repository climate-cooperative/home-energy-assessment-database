const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { HOME_TYPE_TABLE } = require('../constants/tables');

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2' }));

// GET /home_type
const getAllHomeTypes = async (req, res) => {
  try {
    const homeTypes = await dynamoService.getAll(HOME_TYPE_TABLE);
    res.json(homeTypes.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /home_type/:type
const getHomeType = async (req, res) => {
  try {
    const homeType = await dynamoService.getItem(
      HOME_TYPE_TABLE,
      { home_type: req.params.type }
    );
    res.json(homeType.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getHomeType, getAllHomeTypes }