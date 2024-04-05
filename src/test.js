const {faker} = require('@faker-js/faker')

const randomId = faker.string.uuid();
console.log(randomId);

exports.handler = async (event) => {
  const response = {
      statusCode: 200,
      body: JSON.stringify(`Hello from Zwell\'s lambda!: ${randomId}`),
  };
  return response;
};