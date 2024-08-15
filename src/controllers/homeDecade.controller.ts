import { HOME_DECADE_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /home_decade
export const getAllHomeDecades = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const hpmeDecades = await dbService.getAllItems(HOME_DECADE_TABLE);
    res.json(hpmeDecades);
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
    const homeDecade = await dbService.getItem(HOME_DECADE_TABLE, {
      decade: req.params.decade,
    });
    res.json(homeDecade);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
