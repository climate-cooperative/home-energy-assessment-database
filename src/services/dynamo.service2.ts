import 'reflect-metadata';
import {
  DynamoDBClient,
  DynamoDBClientConfig,
  QueryCommandInput,
} from '@aws-sdk/client-dynamodb';
import { DbService } from './db.service';
import { injectable } from 'inversify';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { isArrSubsetOfObj } from '../utils/mapping.utils';

export interface IndexMapping {
  table: string;
  indexedColumns: string[];
  indexName: string;
}

@injectable()
export class DynamoService2 implements DbService {
  client;
  indexes;

  constructor(client: DynamoDBDocument, indexes: IndexMapping[]) {
    this.client = client;
    this.indexes = indexes;
  }

  public getItemById = async (table: string, id: string) => {
    return await this.getItem(table, { _id: id });
  };

  public getItem = async (table: string, query: any) => {
    const command: QueryCommandInput = {
      TableName: table,
      Select: 'ALL_ATTRIBUTES',
      ExpressionAttributeValues: DynamoService2.buildScanAttributeValues(query),
      ExpressionAttributeNames: DynamoService2.buildScanAttributeNames(query),
    };

    // add indexes if needed
    const indexMatches = this.indexes
      .filter(x => x.table == table)
      .filter(x => isArrSubsetOfObj(x.indexedColumns, query));

    // if there are indexes need different config
    if (indexMatches.length > 0) {
      command.IndexName = indexMatches[0].indexName;
      command.KeyConditionExpression =
        DynamoService2.buildScanExpression(query);
    } else {
      command.FilterExpression = DynamoService2.buildScanExpression(query);
    }

    const result = (await this.client.scan(command)).Items;
    return result ? result : [];
  };

  public getAllItems = async (table: string) => {
    const x = await this.client.scan({
      TableName: table,
    });

    const result = x.Items;
    return result ? result : [];
  };

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

  // static factory method for creating dynamoService2
  // intended for use ioc container config only
  public static factory(env: NodeJS.ProcessEnv): DynamoService2 {
    try {
      console.log('creating dynamodb client');
      const config: DynamoDBClientConfig = {};

      const region = env['AWS_DEFAULT_REGION'] || null;
      const endpoint = env['AWS_DYNAMO_ENDPOINT'] || null;

      region ? (config.region = region) : null;
      endpoint ? (config.endpoint = endpoint) : null;

      const client = DynamoDBDocument.from(new DynamoDBClient(config));

      const indexName = env['DYNAMO_INDEX_NAME'] || null;
      const indexedColumns = env['DYNAMO_INDEX_COLS']?.split(',') || null;
      const table = env['DYNAMO_INDEX_TABLE'] || null;

      const indexMappings: IndexMapping[] = [];

      if (indexName && indexedColumns && table) {
        indexMappings.push({
          indexName: indexName,
          indexedColumns: indexedColumns,
          table: table,
        });
      }

      return new DynamoService2(client, indexMappings);
    } catch (e: any) {
      throw new Error(`error creating dynamoService2: ${(e as Error).message}`);
    }
  }
}
