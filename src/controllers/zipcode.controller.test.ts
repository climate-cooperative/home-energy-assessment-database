import { DynamoService } from '../services/dynamo.service';
import { ZipcodeController } from './zipcode.controller';
import { QueryCommandOutput } from '@aws-sdk/lib-dynamodb';

const mockDynamoMiss: QueryCommandOutput = {
  $metadata: {
    httpStatusCode: 200,
  },
  Items: [],
};

const mockDynamoHit: QueryCommandOutput = {
  $metadata: {
    httpStatusCode: 200,
  },
  Items: [{ zipcode: 'blah' }],
};

const mockDynamoService = { getItemGSI: jest.fn() };
const zipcodeController = new ZipcodeController(mockDynamoService as any);

describe('Tests zipcode controller', () => {
  it('getClosestZipcode', async () => {
    // run through some misses before hit
    mockDynamoService.getItemGSI
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoHit);

    const result = await zipcodeController.getClosestZipcode('10');

    expect(result).toBe(mockDynamoHit.Items);
  });
});
