import { Router } from 'express';
import {
  getAllAppliances,
  getAppliance,
} from '../controllers/appliances.controller';

export const applianceRouter = Router()
  .get('/', getAllAppliances)
  .get('/:name', getAppliance);
