const { DynamoService } = require("../services/dynamo.service")
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2' }));

// GET /appliances
const getAllAppliances = async (req, res) => {
  try {
    const applainces = await dynamoService.getAll('prod_zwell_appliance_table');
    res.json(applainces);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}