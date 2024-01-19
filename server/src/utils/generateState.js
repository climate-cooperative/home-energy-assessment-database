const StateSchema = require('../models/stateModel');
const states = require('../static/states');

function generateStates() {
    // create a dictionary of all US States
    let stateData = {};
    states.forEach((state) => {
        stateData[state] = new StateSchema(state);
    });
    return states;
}

module.exports = generateStates;