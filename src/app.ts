import express, { Request, Response } from 'express'
import cors from 'cors'
import {
  APPLIANCE_ROUTE,
  HVAC_ROUTE,
  HOME_DECADE_ROUTE,
  HOME_TYPE_ROUTE,
  STATE_ROUTE,
  ZIPCODE_ROUTE,
  BIOMASS_ROUTE
} from './constants/routes'

import { applianceRouter } from './routes/appliance.router'
import { biomassRouter } from './routes/biomass.router'
import { homeDecadeRouter } from './routes/homeDecade.router'
import { homeTypeRouter } from './routes/homeType.router'
import { hvacRouter } from './routes/hvac.router'
import { stateRouter } from './routes/state.route'
import { zipcodeRouter } from './routes/zipcode.router'

require('dotenv').config();

const app = express();

app.use(cors());

// json parser
app.use(express.json());

// Log each request
app.use((req: Request, res: Response, next) => {
  console.log(`Received a ${req.method} request on ${req.url}`);
  next();
});

// Use API routes
app.use(APPLIANCE_ROUTE, applianceRouter);
app.use(BIOMASS_ROUTE, biomassRouter);
app.use(HOME_DECADE_ROUTE, homeDecadeRouter);
app.use(HOME_TYPE_ROUTE, homeTypeRouter);
app.use(HVAC_ROUTE, hvacRouter);
app.use(STATE_ROUTE, stateRouter);
app.use(ZIPCODE_ROUTE, zipcodeRouter);

export { app }
