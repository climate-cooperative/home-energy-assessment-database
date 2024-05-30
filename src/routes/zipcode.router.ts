import { Router } from 'express';
import { ZipcodeController } from '../controllers/zipcode.controller';
import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DYNAMO_ENDPOINT } from '../constants/routes';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

const controller = new ZipcodeController(dynamoService)

export const zipcodeRouter = Router().get('/:value', controller.getZipcode);
// .get('/', getAllZipcodes);
