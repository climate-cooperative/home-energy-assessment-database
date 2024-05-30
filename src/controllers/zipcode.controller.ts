import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { ZIPCODE_TABLE } from '../constants/tables';
import { ZIPCODE_GSI } from '../constants/indexes';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /zipcode
export const getAllZipcodes = async (req: Request, res: Response) => {
  try {
    const zipcodes = await dynamoService.getAll(ZIPCODE_TABLE);
    res.json(zipcodes.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /zipcode/:value
export const getZipcode = async (req: Request, res: Response) => {
  try {
    const zipcode = await dynamoService.getItemGSI(ZIPCODE_TABLE, ZIPCODE_GSI, {
      zipcode: req.params.value,
    });
    res.json(zipcode.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
