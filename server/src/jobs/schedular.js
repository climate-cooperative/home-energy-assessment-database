const cron = require('node-cron');
const { appendToStateArrays } = require('../config/mongodb');
const generateStates = require('../utils/generateState');
const { cronSchedule } = require('../static/constants');
const { buildStateEmissions, buildStateEnergyCosts, buildStateEnergyBreakdown } = require('../utils/buildStateData');

// Define the function to update MongoDB
function updateMongoDB() {
    let stateData = generateStates();
    // build data
    buildStateEmissions(stateData);
    buildStateEnergyCosts(stateData);
    buildStateEnergyBreakdown(stateData);

    // update each entry 
    Object.entries(stateData).forEach(([state, data]) => {
        appendToStateArrays(state, data);
    }).then(() => {
        console.log('Updated MongoDB');
    }
    ).catch((err) => {
        console.log(err);
    });
}

// Schedule the cron job
cron.schedule(cronSchedule, updateMongoDB);
