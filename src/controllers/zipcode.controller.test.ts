import { DynamoService } from '../services/dynamo.service';
import { getClosestZipcode } from './zipcode.controller';
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

const mockDynamoService = { getItem: jest.fn() };

// TODO: inject a mocked version of dbservice
// - mock env vars
// - mock service
// - mock service calls

describe.skip('Tests zipcode controller', () => {
  it('getClosestZipcode', async () => {
    // run through some misses before hit
    mockDynamoService.getItem
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoMiss)
      .mockReturnValueOnce(mockDynamoHit);

    const result = await getClosestZipcode('10');

    expect(result).toBe(mockDynamoHit.Items);
  });
});
