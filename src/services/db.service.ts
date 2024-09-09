// interface for agnostic db access
export interface DbService {
  getItemById: (table: string, id: string) => Promise<any>;

  // get item via json query
  // implementations will most likely need to transform
  // the json to work with specific db
  getItem: (table: string, query: any) => Promise<any[]>;
  getAllItems: (table: string) => Promise<any[]>;
}
