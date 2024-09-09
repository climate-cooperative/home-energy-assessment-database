# Home Energy Assessment Database API 🌎 [![](https://img.shields.io/badge/discord-8A2BE2)](https://discord.gg/k6TVUTyXa6)


Welcome to the Climate Cooperative Open Source project! As a social purpose corporation, Climate Cooperative is dedicated to advancing carbon-neutral, sustainable energy solutions for homes. Our mission is to foster diverse, healthy communities by providing innovative and accessible energy efficiency tools and services.

The primary goal of the Home Energy Assessment Database API is to consolidate diverse data sources into a unified platform that enables accurate calculation of a home's carbon footprint. This calculation will consider various factors, including local energy grid mix, weather conditions, and specific home attributes such as age, size, construction materials, and mechanical systems. The project aims to address the critical need for accessible and reliable data to support the development of home energy savings calculators, enable detailed analyses, and facilitate the creation of visualizations pertaining to residential home energy consumption and efficiency.

This platform seeks to empower climate tech startups, academic researchers, and other stakeholders with the data necessary to innovate, study, and propose solutions aimed at reducing residential energy consumption and its environmental impact. By providing a comprehensive and easily accessible API, the project aspires to catalyze advancements in home energy efficiency, support policy development, and contribute to a more sustainable future.


## Climate Cooperative Integration

The Home Energy Assessmant Database acts as the RESTful API for the [home-energy calculator](https://github.com/climate-cooperative/home-energy-calculator), [hvac controller(future)](https://github.com/climate-cooperative/hvac-savings-calculator), and the [heat pump water heater savings calculator(future)](https://github.com/climate-cooperative/heat-pump-water-heater-savings-calculator).

The future purpose for this service is to act as the middle man between a dataset which holds the information which is then used to perform complex, home energy calculations. Where these calculations and results get served to is up to you! Look [here](https://github.com/climate-cooperative/home-energy-assessment-database/discussions/42) for some ideas around that.

## Local Development ⚡️⚡️

*Make sure you have docker running locally*

### Environment Setup

Follow the steps provided in the [env-setup doc](./help/env-setup.md).

**`./start_local.sh`**

### Database Connection

We use [localstack](https://docs.localstack.cloud/user-guide/aws/dynamodb/) to emulate dynamodb locally so we don't need to connect to a real database when dveloping.

Data and tables are hydrated in `init_dynamodb.sh`. Feel free to add data as you want to enable better dev experience.

**Keep an eye on this (project)[https://github.com/climate-cooperative/home-energy-data-manager] for improvements around data** 🚀

## Contributing 🎉🥳🙏

Want to get involved? Take a look at our [CONTRIBUTING DOC](./CONTRIBUTING.md)

## Technology Used

### REST

- [node.js](https://nodejs.org/en)
- [express.js](https://expressjs.com/)
- [inversify.js](https://inversify.io/)

### DATABASE ACCESS

- [aws-sdkv3: dynamoDB](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/)

### Testing

- [Jest](https://jestjs.io/)
- 

## Climate Cooperative 🌎

Learn more about the [Climate Cooperative](https://www.climate-cooperative.org).