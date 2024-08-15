import { DynamoDBDocument, ScanCommandOutput } from "@aws-sdk/lib-dynamodb";
import { IndexMapping } from "./dynamo.service2";
import { DynamoService2 } from "./dynamo.service2";

const mockResponse: ScanCommandOutput = {
    $metadata: {},
    Items: [
        {
            val : 1,
            indexedCol: 'foo'
        }
    ]
}

// jest mocking is cumbersome...
// simple override
const mockClient = {
    scan : () => Promise.resolve(mockResponse),
    query: () => Promise.resolve(mockResponse)
}

const index: IndexMapping[] = [{
    table: 'indexTable',
    indexName: 'test-index',
    indexedColumns: ['indexedCol'],
}];

const dynamoService2: DynamoService2 = new DynamoService2(
    mockClient as unknown as DynamoDBDocument,
    index
);

describe('dynamoServce2', () => {
    it('getAll success', async () => {
        const result = await dynamoService2.getAllItems('nonIndex');
        expect(result).toBe(mockResponse.Items);
    });

    it('getItemById success', async () => {
        const result = await dynamoService2.getItemById('nonIndex', '1');
        expect(result).toBe(mockResponse.Items);
    });

    it('getItem success', async () => {
        const result = await dynamoService2.getItem('nonIndex', {val: 1});
        expect(result).toBe(mockResponse.Items);
    });

    it('getItem success with index', async () => {
        const result = await dynamoService2.getItem('indexTable', {indexedCol: 'foo'});
        expect(result).toBe(mockResponse.Items);
    });
});

