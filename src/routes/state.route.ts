import { Router } from 'express'
import {
  getAllStates,
  getState,
  getStateFromZipCode,
} from '../controllers/state.controller'

export const stateRouter = Router()
  .get('/', getAllStates)
  .get('/:name', getState)
  .get("/from-zip-code/:zipcode", getStateFromZipCode);
