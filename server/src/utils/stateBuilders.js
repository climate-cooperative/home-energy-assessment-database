const fetch = require('node-fetch');
const {
    electric_url,
    breakdown_url,
    url_energy_cost_mapping
} = require('../static/constants');
const {
    energy_conversions,
    fuelTypeMapping
} = require('../static/conversions');
const { 
    emissionSchema,
    costSchema,
    breakdownSchema
} = require('../models/stateModel');


// Define the function to build the state emissions data
function buildStateEmissions(stateData) {
    getFromAPI(electric_url).then((data) => {
        data.series.forEach((entry) => {
            // Ensure schema is correct
            let Entry = new emissionSchema({
                period: entry.period,
                stateid: entry.stateid,
                'co2-rate-lbs-mwh': entry['co2-rate-lbs-mwh'],
            });
            stateData[Entry.stateid]['State Emissions']['CO2 lbs/MHW'] = Entry['co2-rate-lbs-mwh'];
            stateData[Entry.stateid]['State Emissions']['CO2 lbs/BTU'] = Entry['co2-rate-lbs-mwh'] / energy_conversions['Electricity'];
            // Need to figure out how to calculate this
            // stateData[state]['State Emissions']['CO2 Net Emission Estimate'] = co2_thousand_metric_tons; 
            stateData[state]['State Emissions']['Date'] = Entry.period;
        });
    }).catch((err) => {
        console.log(err);
    });
}

// Define the function to build the state energy costs data
function buildStateEnergyCosts(stateData) {
    for (url in url_energy_cost_mapping) {
        getFromAPI(url).then((data) => {
            data.series.forEach((entry) => {
                let Entry = url === electricity_cost_url 
                    ? new costSchema({
                        period: entry.period,
                        abbr: entry.stateid,
                        product: 'Electricity',
                        price: entry.price,
                    })
                    : new costSchema({
                        period: entry.period,
                        abbr: entry.duoarea.slice(1),
                        product: entry['product-name'],
                        price: entry.value,
                    });
                // map to the correct state
                stateData[Entry.abbr]['State Energy Costs'][url_energy_cost_mapping[url]] = Entry.price / energy_conversions[Entry.product];
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    // Set the date for all the state energy costs
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let dateString = year + '-' + month + '-' + day;
    Object.entries(stateData).forEach(([_state, data]) => {
        data['State Energy Costs']['Date'] = dateString;
    });
}

// Define the function to build the state energy breakdown data
function buildStateEnergyBreakdown(stateData) {
    // create dict for all renewable energy
    getFromAPI(breakdown_url).then((data) => {
        data.series.forEach((entry) => {
            let Entry = new breakdownSchema({
                period: entry.period,
                location: entry.location,
                fueltypeid: entry.fueltypeid,
                'consumption-for-eg-btu': entry['consumption-for-eg-btu'] || 0,
            });
            let fuelType = fuelTypeMapping[Entry.fuelAbbr];
            stateData[Entry.location]['State Energy Breakdown'][fuelType] = Entry['consumption-for-eg-btu'];
        });
    }).catch((err) => {
        console.log(err);
    });

    // calculate the other renewable energy
    stateData.forEach((state) => {
        // Set the date for all the state energy costs
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let dateString = year + '-' + month;
        let otherRenewable = otherRenewableCalculation(state);
        delete state['State Energy Breakdown']['All Renewable'];
        state['State Energy Breakdown']['Other Renewable'] = otherRenewable;
        state['State Energy Breakdown']['Date'] = dateString;
        state['State Energy Breakdown']['Units'] = 'million MMBtu';
    });
}

function otherRenewableCalculation(state) {
    let solar = state['State Energy Breakdown']['Solar'] || 0;
    let wind = state['State Energy Breakdown']['Wind'] || 0;
    let all_renewable = state['State Energy Breakdown']['All Renewable'] || 0;
    return (all_renewable - solar - wind) > 0 ? (all_renewable - solar - wind) : 0;
}

async function getFromAPI(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    buildStateEmissions,
    buildStateEnergyCosts,
    buildStateEnergyBreakdown
}