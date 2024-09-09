import { APPLIANCE_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /appliances
export const getAllAppliances = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const applainces = await dbService.getAllItems(APPLIANCE_TABLE);
    res.json(applainces);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /appliances/:name
export const getAppliance = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const applaince = await dbService.getItem(APPLIANCE_TABLE, {
      appliance: req.params.name,
    });
    res.json(applaince);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
