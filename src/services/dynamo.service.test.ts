import { DynamoService } from './dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { APPLIANCE_TABLE } from '../constants/tables';

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
