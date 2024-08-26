import { getMockReq, getMockRes } from '@jest-mock/express'
import { getClosestZipcode, getZipcode } from './zipcode.controller';
import { QueryCommandOutput } from '@aws-sdk/lib-dynamodb';
// import 'dotenv/config';

const oldEnv = process.env;

const { res, next } = getMockRes();


describe('Tests zipcode controller', () => {
  it('getZipcode', async () => {

    const req = getMockReq({params: {value: "10001}"}});

    await getZipcode(req, res, next);

    expect(res.json).toHaveBeenLastCalledWith(
      expect.objectContaining([{foo: 'bar'}])
    )
  });
});
