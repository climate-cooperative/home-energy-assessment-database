import { DynamoService } from '../services/dynamo.service';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { BIOMASS_TABLE } from '../constants/tables';
import { DYNAMO_ENDPOINT } from '../constants/routes';
import { Request, Response } from 'express';

const dynamoService = new DynamoService(
  new DynamoDBClient({ region: 'us-west-2', endpoint: DYNAMO_ENDPOINT }),
);

// GET /biomass
export const getAllBiomass = async (req: Request, res: Response) => {
  try {
    const biomasses = await dynamoService.getAll(BIOMASS_TABLE);
    res.json(biomasses.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /biomass/:name
export const getBiomass = async (req: Request, res: Response) => {
  try {
    const biomass = await dynamoService.getItem(BIOMASS_TABLE, {
      name: req.params.name,
    });
    res.json(biomass.Items);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
