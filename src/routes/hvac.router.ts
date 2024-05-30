import { Router } from 'express';
import { getAllHvacs, getHvac } from '../controllers/hvac.controller';

export const hvacRouter = Router().get('/', getAllHvacs).get('/:name', getHvac);
