const { DynamoService } = require('./dynamo.service');

describe('dynamoService', () => {
  test('buildScanExpression should build filterExpression for ScanCommand', () => {
    const result = DynamoService.buildScanExpression({ "name": "test" });
    expect(result).toBe('name = :name');
  })

  test('buildScanAttributes should build ExpressionAttributeValues for ScanCommand', () => {
    const result = DynamoService.buildScanAttributes({ "name": "test" });
    expect(result).toEqual({ ':name': 'test' });
  });

});
