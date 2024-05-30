import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { APPLIANCE_TABLE } from '../constants/tables';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { NextFunction, Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /appliances
export const getAllAppliances = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const applainces = await dynamoService.getAll(APPLIANCE_TABLE);
    res.json(applainces.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /appliances/:name
export const getAppliance = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const applaince = await dynamoService.getItem(APPLIANCE_TABLE, {
      appliance: req.params.name,
    });
    res.json(applaince.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
