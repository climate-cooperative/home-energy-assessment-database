import { DynamoService } from '../services/dynamo.service';
import { ZIPCODE_TABLE } from '../constants/tables';
import { ZIPCODE_GSI } from '../constants/indexes';
import { NextFunction, Request, Response } from 'express';
import { BasicError, DynamoError } from '../constants/exceptions';
import { ZipcodeModel } from '../models/zipcode.model';
import { container, TYPES } from '../config/inversify.config';
import { DbService } from '../services/db.service';

const dbService = container.get<DbService>(TYPES.DB_CLIENT);

  // GET /zipcode/:value
  export const getZipcode = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const zipcode = req.params.value;

    // simple catch for numerical invalid zipcodes
    // smallest = 00501
    // largest = 99950
    if (parseInt(zipcode) < 501 || parseInt(zipcode) > 99950) {
      res
        .status(500)
        .json({ message: new BasicError('zipcode out of range').message });
    }

    try {
      const result = await dbService.getItem(
        ZIPCODE_TABLE,
        {
          zipcode: zipcode,
        },
      );

      res.json(
        result.length! > 0
          ? result
          : await getClosestZipcode(zipcode),
      );
    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  export const getClosestZipcode = async (
    zipcode: string,
  ): Promise<ZipcodeModel[]> => {
    // get whichever one hits first
    let tracker = 1;
    let upResult = await callDynamo(parseInt(zipcode) + tracker);
    let downresult = await callDynamo(parseInt(zipcode) - tracker);
    while (upResult.length <= 0 && downresult.length <= 0) {
      upResult = await callDynamo(parseInt(zipcode) + tracker);
      downresult = await callDynamo(parseInt(zipcode) - tracker);

      tracker++;
    }

    if (upResult.length > 0) {
      return upResult;
    }
    return downresult;
  };

  const callDynamo = async (prevZipcode: number): Promise<ZipcodeModel[]> => {
    const result = await dbService.getItem(
      ZIPCODE_TABLE,
      {
        zipcode: prevZipcode.toString(),
      },
    );

    if (result.length! > 0) {
      return result as ZipcodeModel[];
    }

    return [];
  };
