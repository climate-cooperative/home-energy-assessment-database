const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb')

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
}

module.exports = { DynamoService }