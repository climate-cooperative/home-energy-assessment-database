import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { STATE_TABLE, ZIPCODE_TABLE } from '../constants/tables';
import { ZIPCODE_GSI } from '../constants/indexes';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /state
export const getAllStates = async (res: Response, req: Request) => {
  try {
    const states = await dynamoService.getAll(STATE_TABLE);
    res.json(states.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /state/:name
export const getState = async (res: Response, req: Request) => {
  try {
    const state = await dynamoService.getItem(STATE_TABLE, {
      state: req.params.name,
    });
    res.json(state.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /state/from-zip-code/:zipcode
export const getStateFromZipCode = async (res: Response, req: Request) => {
  try {
    const zipcode = await dynamoService.getItemGSI(ZIPCODE_TABLE, ZIPCODE_GSI, {
      zipcode: req.params.zipcode,
    });
    if (!zipcode.Items) {
      res.json([]);
      return;
    }
    const stateAbbreviation = zipcode.Items[0].state;
    const state = await dynamoService.getItem(STATE_TABLE, {
      abbreviation: stateAbbreviation,
    });
    res.json(state.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
