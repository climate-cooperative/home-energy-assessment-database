import { BIOMASS_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /biomass
export const getAllBiomass = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const biomasses = await dbService.getAllItems(BIOMASS_TABLE);
    res.json(biomasses);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /biomass/:name
export const getBiomass = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const biomass = await dbService.getItem(BIOMASS_TABLE, {
      name: req.params.name,
    });
    res.json(biomass);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
