const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb')

// Zwell-home-energy-api is acts as a service layer for reading from dynamo
// This service only needs READ operations
// 
// Dynamo Allowed Operations:
// "dynamodb:BatchGetItem",
// "dynamodb:GetItem",
// "dynamodb:Query",
// "dynamodb:Scan"
class DynamoService {
  docClient;

  constructor(client) {
    this.docClient = DynamoDBDocument.from(client);
  }

  async getAll(table) {
    return await this.docClient.scan({
      TableName: table
    });
  }

  async getItem(table, query) {
    const command = {
      TableName: table,
      FilterExpression: buildScanExpression(query),
      ExpressionAttributeValues: buildScanAttributes(query),
      Select: 'ALL_ATTRIBUTES'
    }

    console.log(command);
    return await this.docClient.scan(command);
  }

  async getItemComplex(table, expression, attribute) {
    return await this.docClient.scan({
      TableName: table,
      FilterExpression: expression,
      ExpressionAttributeValues: attributes
    });
  }

  static buildScanExpression(query) {
    const expressions = [];
    for (const key in query) {
      expressions.push(`${key} = :${key}`);
    }

    return expressions.join(' AND ')
  }

  static buildScanAttributes(query) {
    const attributes = {};
    for (const key in query) {
     attributes[`:${key}`] = query[key]
    }

    return attributes;
  }

}

module.exports = { DynamoService }