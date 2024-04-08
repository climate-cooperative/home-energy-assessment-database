const { DynamoService } = require('./dynamo.service');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { APPLIANCE_TABLE } = require('../constants/tables');

const client = new DynamoDBClient({ region: 'us-west-2' });
const documentServcie = new DynamoService(client);

describe('dynamoService', () => {
  test('buildScanExpression should build filterExpression for ScanCommand', () => {
    const result = DynamoService.buildScanExpression({ "name": "test" });
    expect(result).toBe('#name = :name');
  })

  test('buildScanAttributes should build ExpressionAttributeValues for ScanCommand', () => {
    const result = DynamoService.buildScanAttributeValues({ "name": "test" });
    expect(result).toEqual({ ':name': 'test' });
  });

  // needs aws access... integration test
  // test('getItem should get item by simple query', async () => {
  //   const result = await documentServcie.getItem(
  //     APPLIANCE_TABLE,
  //     {
  //       appliance: 'stove',
  //       fuel_type: 'natural gas'
  //     }
  //   );

  //   console.log(result);
  //   expect(result.Count).toBe(1);
  // })

});
