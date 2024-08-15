import { Container } from 'inversify';
import 'reflect-metadata';
import 'dotenv/config';
import { DbService } from '../services/db.service';
import { DynamoService2 } from '../services/dynamo.service2';

// inversify is a good way to handle ioc and di
// can also help with setup depending on config
// inject certain services to higher order logic
console.log('Standing up ioc container');
const container = new Container();

// using the env, determine and configure db service to use
const determineDBService = ():DbService => {
    const dbType = process.env['DATA_SOURCE'] || null;

    console.log(dbType);
    switch (dbType) {
        case 'DYNAMODB':
        return DynamoService2.factory(process.env);
    }
    console.log('Configuring DB Service');

    throw new Error("unable to configure database client");
}

export const TYPES = {
    DB_CLIENT : 'DB_CLIENT'
}



// bind db service to container
container.bind<DbService>(TYPES.DB_CLIENT).toConstantValue(determineDBService());

// process .env file to configure injectables

// const x = container.get<DbService>(TYPES.DB_CLIENT);


export { container };