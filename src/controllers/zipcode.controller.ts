import { DynamoService } from '../services/dynamo.service';
import { ZIPCODE_TABLE } from '../constants/tables';
import { ZIPCODE_GSI } from '../constants/indexes';
import { NextFunction, Request, Response } from 'express';
import { BasicError, DynamoError } from '../constants/exceptions';
import { ZipcodeModel } from '../models/zipcode.model';

export class ZipcodeController {

  private dynamoService: DynamoService;

  constructor ( dynamoService: DynamoService){
    this.dynamoService = dynamoService
  }

  // GET /zipcode/:value
  public getZipcode = async (req: Request, res: Response, next: NextFunction) => {
    const zipcode = req.params.value;

    // simple catch for numerical invalid zipcodes
    // smallest = 00501
    // largest = 99950
    if (parseInt(zipcode) < 501 || parseInt(zipcode) > 99950) {
      res.status(500).json({message: new BasicError('zipcode out of range').message});
    }

    try {
      const result = await this.dynamoService.getItemGSI(ZIPCODE_TABLE, ZIPCODE_GSI, {
        zipcode: zipcode,
      });
      
      // catch all for non 200 responses
      if (result.$metadata.httpStatusCode !== 200) {
        throw new DynamoError('error retrieving zipcode', result.$metadata.httpStatusCode!)
      }

      res.json(result.Items?.length! > 0 ? result.Items : await this.getClosestZipcode(zipcode))

    } catch (err) {
      res.status(500).json({ message: (err as Error).message });
    }
  };

  public getClosestZipcode = async (zipcode: string): Promise<ZipcodeModel[]> => {
    // get whichever one hits first
    let tracker = 1;
    let upResult = await this.callDynamo(parseInt(zipcode) + tracker);
    let downresult = await this.callDynamo(parseInt(zipcode) - tracker);
    while (upResult.length <= 0 && downresult.length <= 0){

      upResult = await this.callDynamo(parseInt(zipcode) + tracker);
      downresult = await this.callDynamo(parseInt(zipcode) - tracker);

      tracker++;
    }

    if (upResult.length > 0) {
      return upResult;
    }
    return downresult;
  }

  // recursivley run down through zipcodes until a hit
  private callDynamo = async (prevZipcode: number): Promise<ZipcodeModel[]> => {
    const result = await this.dynamoService.getItemGSI(ZIPCODE_TABLE, ZIPCODE_GSI, {
      zipcode: prevZipcode.toString(),
    });

    if (result.Items?.length! > 0) {
      return result.Items as ZipcodeModel[];
    }

    return [];
  }
}