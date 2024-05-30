import { Router } from 'express';
import {
  getAllHomeTypes,
  getHomeType,
} from '../controllers/homeType.controller';

export const homeTypeRouter = Router()
  .get('/', getAllHomeTypes)
  .get('/:type', getHomeType);
