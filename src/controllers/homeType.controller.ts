import { HOME_TYPE_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /home_type
export const getAllHomeTypes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const homeTypes = await dbService.getAllItems(HOME_TYPE_TABLE);
    res.json(homeTypes);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /home_type/:type
export const getHomeType = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const homeType = await dbService.getItem(HOME_TYPE_TABLE, {
      home_type: req.params.type,
    });
    res.json(homeType);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
