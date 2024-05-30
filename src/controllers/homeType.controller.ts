import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { HOME_TYPE_TABLE } from '../constants/tables';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { NextFunction, Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /home_type
export const getAllHomeTypes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const homeTypes = await dynamoService.getAll(HOME_TYPE_TABLE);
    res.json(homeTypes.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /home_type/:type
export const getHomeType = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const homeType = await dynamoService.getItem(HOME_TYPE_TABLE, {
      home_type: req.params.type,
    });
    res.json(homeType.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
