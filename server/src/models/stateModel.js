const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  'State Emissions': {
    'CO2 lbs/MHW': Number,
    'CO2 lbs/BTU': Number,
    'CO2 Net Emission Estimate': Number,
    'Date': Date,
  },
  'State Energy Costs': {
    'USD/btu electricity': Number,
    'USD/btu natural gas': Number,
    'USD/btu propane': Number,
    'USD/btu fuel oil': Number,
    'Date': Date,
  },
  'State Energy Breakdown': {
    'All Fuels': Number,
    'Natural Gas': Number,
    'Petroleum': Number,
    'Coal': Number,
    'Nuclear': Number,
    'Hydro': Number,
    'Wind': Number,
    'Solar': Number,
    'Other Renewable': Number,
    'Date': Date,
    'Units': String,
  }
});

const StateModel = mongoose.model('StateModel', StateSchema);

module.exports = StateModel;