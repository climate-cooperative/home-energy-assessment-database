const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { ZIPCODE_TABLE } = require('../constants/tables');

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2' }));

// GET /zipcode
const getAllZipcodes = async (req, res) => {
  try {
    const zipcodes = await dynamoService.getAll(ZIPCODE_TABLE);
    res.json(zipcodes.Items);
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

// GET /zipcode/:value
const getZipcode = async (req, res) => {
  try {
    const zipcode = await dynamoService.getItem(
      ZIPCODE_TABLE,
      { zipcode: req.params.value }
    );
    res.json(zipcode.Items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getZipcode, getAllZipcodes }