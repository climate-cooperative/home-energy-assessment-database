import { HVAC_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /hvac
export const getAllHvacs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hvacs = await dbService.getAllItems(HVAC_TABLE);
    res.json(hvacs);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /hvac/:name
export const getHvac = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hvac = await dbService.getItem(HVAC_TABLE, {
      display_name: req.params.name,
    });
    res.json(hvac);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
