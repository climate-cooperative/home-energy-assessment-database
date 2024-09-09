import { STATE_TABLE, ZIPCODE_TABLE } from '../constants/tables';
import { NextFunction, Request, Response } from 'express';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';
import { ZipcodeModel } from '../models/zipcode.model';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

// GET /state
export const getAllStates = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const states = await dbService.getAllItems(STATE_TABLE);
    res.json(states);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /state/:name
export const getState = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const state = await dbService.getItem(STATE_TABLE, {
      state: req.params.name,
    });
    res.json(state);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

// GET /state/from-zip-code/:zipcode
export const getStateFromZipCode = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const zipcode = (await dbService.getItem(ZIPCODE_TABLE, {
      zipcode: req.params.zipcode,
    })) as ZipcodeModel[];
    if (!zipcode) {
      res.json([]);
      return;
    }
    const stateAbbreviation = zipcode[0].state;
    const state = await dbService.getItem(STATE_TABLE, {
      abbreviation: stateAbbreviation,
    });
    res.json(state);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
