import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

import { DynamoDBDocument, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

// Zwell-home-energy-api is acts as a service layer for reading from dynamo
// This service only needs READ operations
//
// Dynamo Allowed Operations:
// "dynamodb:BatchGetItem",
// "dynamodb:GetItem",
// "dynamodb:Query",
// "dynamodb:Scan"
export class DynamoService {
  docClient;

  constructor(client: DynamoDBClient) {
    this.docClient = DynamoDBDocument.from(client);
  }

  async getAll(table: string) {
    return await this.docClient.scan({
      TableName: table,
    });
  }

  async getItemGSI(table: string, index: string, query: any) {
    const command: QueryCommandInput = {
      TableName: table,
      IndexName: index,
      Select: 'ALL_ATTRIBUTES',
      KeyConditionExpression: DynamoService.buildScanExpression(query),
      ExpressionAttributeValues: DynamoService.buildScanAttributeValues(query),
      ExpressionAttributeNames: DynamoService.buildScanAttributeNames(query),
    };

    console.log(command);
    return await this.docClient.query(command);
  }

  async getItem(table: string, query: any) {
    const command: QueryCommandInput = {
      TableName: table,
      FilterExpression: DynamoService.buildScanExpression(query),
      ExpressionAttributeValues: DynamoService.buildScanAttributeValues(query),
      ExpressionAttributeNames: DynamoService.buildScanAttributeNames(query),
      Select: 'ALL_ATTRIBUTES',
    };

    console.log(command);
    return await this.docClient.scan(command);
  }

  async getItemComplex(table: string, expression: any, attribute: any) {
    return await this.docClient.scan({
      TableName: table,
      FilterExpression: expression,
      ExpressionAttributeValues: attribute,
      Select: 'ALL_ATTRIBUTES',
    });
  }

  static buildScanExpression(query: any) {
    const expressions = [];
    for (const key in query) {
      expressions.push(`#${key} = :${key}`);
    }

    return expressions.join(' AND ');
  }

  static buildScanAttributeValues(query: any) {
    const attributes: any = {};
    for (const key in query) {
      attributes[`:${key}`] = query[key];
    }

    return attributes;
  }

  static buildScanAttributeNames(query: any) {
    const names: any = {};
    for (const key in query) {
      names[`#${key}`] = key;
    }

    return names;
  }
}
