const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { STATE_TABLE } = require('../constants/tables');
const { DYNAMO_ENDPOINT } = require("../constants/routes");

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }));

// GET /state
const getAllStates = async (req, res) => {
  try {
    const states = await dynamoService.getAll(STATE_TABLE);
    res.json(states.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /state/:name
const getState = async (req, res) => {
  try {
    const state = await dynamoService.getItem(
      STATE_TABLE,
      { state: req.params.name }
    );
    res.json(state.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getState, getAllStates }
