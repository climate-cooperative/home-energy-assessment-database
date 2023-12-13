/*



*/

/*
Dynamic Data:

    Heating Degree Days & Cooling Degree Days (at a weather station level)
        We pull the historical temperature data by weather station from the GHCNd
        We use an assumption around a 65° internal home temperature to determine heat degree and cooling degree days. We arrived at this number based on EIA's definition.
    Ground Water Temperature (or Surface Water Temperature) (at a water site level
        USGS Water Service API
    Electricity Production Sources (at a state level)
    Natural Gas Utility Price (at a state level)
    Electricity Utility Price (at a state level)
    Other Fuel Prices (Propane, Fuel Oil, Kerosene, Wood, Wood Pellets) (at a national average level)
        EIA Open Data
            Natural Gas - Monthly by State
            Electricity - Monthly by State
            Propane - Weekly by State
            Heating Oil - Weekly by State
        We'd like to use APIv2 to connect pull this data by state as frequently as it is updated.
*/

const cron = require('node-cron');
const axios = require('axios');
const client = require('../config/mongodb');

const updateDatabase = () => {
    updateHeatingDegreeDays();
    updateGroundWaterTemperature();
    updateElectricityProductionSources();
    updateUtilityPrices();
};

const updateHeatingDegreeDays = async () => {
    try {
        // Make API requests to fetch data from other APIs
        const response = await axios.get('https://api.example.com/data');

        // Connect to the MongoDB database
        await client.connect();
        const db = client.db('your-database-name');
        const collection = db.collection('your-collection-name');

        // Update the database with the fetched data
        await collection.insertMany(response.data);

        // Close the database connection
        await client.close();

    } catch (error) {
        console.error('Error updating database:', error);
    }
};

const updateGroundWaterTemperature = async () => {
    try {
        // Make API requests to fetch data from other APIs
        const response = await axios.get('https://api.example.com/data');

        // Connect to the MongoDB database
        await client.connect();
        const db = client.db('your-database-name');
        const collection = db.collection('your-collection-name');

        // Update the database with the fetched data
        await collection.insertMany(response.data);

        // Close the database connection
        await client.close();

    } catch (error) {
        console.error('Error updating database:', error);
    }
}

const updateElectricityProductionSources = async () => {
    try {
        // Make API requests to fetch data from other APIs
        const response = await axios.get('https://api.example.com/data');

        // Connect to the MongoDB database
        await client.connect();
        const db = client.db('your-database-name');
        const collection = db.collection('your-collection-name');

        // Update the database with the fetched data
        await collection.insertMany(response.data);

        // Close the database connection
        await client.close();

    } catch (error) {
        console.error('Error updating database:', error);
    }
}

const updateUtilityPrices = async () => {
    try {
        // Make API requests to fetch data from other APIs
        const response = await axios.get('https://api.example.com/data');

        // Connect to the MongoDB database
        await client.connect();
        const db = client.db('your-database-name');
        const collection = db.collection('your-collection-name');

        // Update the database with the fetched data
        await collection.insertMany(response.data);

        // Close the database connection
        await client.close();

    } catch (error) {
        console.error('Error updating database:', error);
    }
}

module.exports = () => {
  // Run the updateDatabase function every day at 12:00 AM
  cron.schedule('0 0 * * *', updateDatabase);
}
