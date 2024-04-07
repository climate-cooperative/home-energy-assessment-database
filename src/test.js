const {faker} = require('@faker-js/faker')

exports.handler = async (event) => {

  const randomId = faker.string.uuid();
  console.log(randomId);
  
  const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from Zwell\'s lambda!: ${randomId}`),
  };
  return response;
};