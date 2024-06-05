import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { HOME_DECADE_TABLE } from '../constants/tables';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { NextFunction, Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /home_decade
export const getAllHomeDecades = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hpmeDecades = await dynamoService.getAll(HOME_DECADE_TABLE);
    res.json(hpmeDecades.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /home_decade/:decade
export const getHomeDecade = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const homeDecade = await dynamoService.getItem(HOME_DECADE_TABLE, {
      decade: req.params.decade,
    });
    res.json(homeDecade.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
