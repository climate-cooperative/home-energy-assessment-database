import { Router } from 'express'
import {
  getAllBiomass,
  getBiomass
} from '../controllers/biomass.controller'

export const biomassRouter = Router()
  .get('/', getAllBiomass)
  .get('/:name', getBiomass)
