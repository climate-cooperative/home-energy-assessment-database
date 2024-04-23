const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { BIOMASS_TABLE } = require('../constants/tables');
const { DYNAMO_ENDPOINT } = require("../constants/routes");

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }));

// GET /biomass
const getAllBiomass = async (req, res) => {
  try {
    const biomasses = await dynamoService.getAll(BIOMASS_TABLE);
    res.json(biomasses.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET /biomass/:name
const getBiomass = async (req, res) => {
  try {
    const biomass = await dynamoService.getItem(
      BIOMASS_TABLE,
      { name: req.params.name }
    );
    res.json(biomass.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getBiomass, getAllBiomass }