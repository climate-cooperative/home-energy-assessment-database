import { Router } from 'express';
import {
  getAllHomeDecades,
  getHomeDecade,
} from '../controllers/homeDecade.controller';

export const homeDecadeRouter = Router()
  .get('/', getAllHomeDecades)
  .get('/:decade', getHomeDecade);
