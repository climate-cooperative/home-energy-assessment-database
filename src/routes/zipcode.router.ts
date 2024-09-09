import { Router } from 'express';
import { getZipcode } from '../controllers/zipcode.controller';

export const zipcodeRouter = Router().get('/:value', getZipcode);
