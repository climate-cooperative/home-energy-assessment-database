import { DynamoService } from "../services/dynamo.service"
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { HVAC_TABLE } from '../constants/tables'
import { DYNAMO_ENDPOINT } from "../constants/routes"
import { Request, Response } from 'express'

const dynamoService = new DynamoService(new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }));

// GET /hvac
export const getAllHvacs = async (req: Request, res: Response) => {
  try {
    const hvacs = await dynamoService.getAll(HVAC_TABLE);
    res.json(hvacs.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
}

// GET /hvac/:name
export const getHvac = async (req: Request, res: Response) => {
  try {
    const hvac = await dynamoService.getItem(
      HVAC_TABLE,
      { display_name: req.params.name }
    );
    res.json(hvac.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
}