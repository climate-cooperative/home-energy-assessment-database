import { DbService } from '../services/db.service';

// simple dbService implemnetation to help with mocking
export class DbServiceMock implements DbService {
  public getItemById = async (table: string, id: string) => {
    return { foo: 'bar' };
  };

  public getItem = async (table: string, query: any) => {
    return [{ foo: 'bar' }];
  };

  public getAllItems = async (table: string) => {
    return [{ foo: 'bar' }];
  };

  public static factory() {
    return new DbServiceMock();
  }
}
