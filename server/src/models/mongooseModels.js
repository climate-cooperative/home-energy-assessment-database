// create schema for models

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('../config/mongodb');

const appliancesSchema = new Schema({
    _id: String,
    appliance: String,
    'fuel type': String,
    unit: String,
    'per year': Number,
    'avg price': Number,
    lifespan: Number
});

const hvac_appliancesSchema = new Schema({
    _id: String,
    default_unit_type: String,
    description: String,
    efficiency: Number,
    external_link: String,
    fuel: String,
    function: String,
    icon: String,
    lifespan: Number,
    system: String,
    creation_date: String,
    modified_date: String,
    slug: String,
    creator: String,
    unique_id: String,
    display_name: String
});

const home_decadesSchema = new Schema({
    _id: String,
    decade: String,
    prob_of_insulation: Number,
    insulation: String,
    insulation_r_in: Number,
    wall_insulation_r: Number,
    wall_construction: Number,
    wall_siding: Number,
    wall_r: Number,
    attic_insulation_r: Number,
    joist: Number,
    roof: Number,
    attic_r: Number,
    ach: Number
});

const home_typeSchema = new Schema({
    _id: String,
    home_type: String,
    shared_walls: Number,
    shared_ceilings: Number,
});

const state_tableSchema = new Schema({
    _id: String,
    State: String,
    Abbreviation: String,
    'State Emissions': Array,
    'State Energy Costs': Array,
    'State Energy Breakdown': Array
});

const zip_tableSchema = new Schema({
    _id: String,
    state: String,
    zipcode: String,
    primary_city: String,
    latitude: Number,
    longitude: Number,
    degree_days: Object,
    water_temperature_data: Object,
});

const wood_tableSchema = new Schema({
    _id: String,
    date: String,
    price: String,
});

const test = connection.useDb('test');
const home_energy_data = connection.useDb('Home_Energy_Data');

// create models from schema
const Appliances = test.model('Appliances', appliancesSchema);
const HVAC_Appliances = test.model('HVAC Appliances', hvac_appliancesSchema);
const Home_Decades = test.model('Home Decades', home_decadesSchema);
const Home_Type = test.model('Home Type', home_typeSchema);
const State_Data = home_energy_data.model('State Data', state_tableSchema);
const Zip_Data = home_energy_data.model('Zip Code Data', zip_tableSchema);
const Wood_Table = home_energy_data.model('Densified Biomass Prices', wood_tableSchema);

module.exports = {
    Appliances,
    HVAC_Appliances,
    Home_Decades,
    Home_Type,
    State_Data,
    Zip_Data,
    Wood_Table
};