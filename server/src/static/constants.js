// Initialize dotenv
require('dotenv').config();
// Define port
const port = process.env.PORT || 5000;
// Define the API URLs
const api_key = process.env.EIA_API_KEY
// mongodb connection string
const mongodb_connection = `mongodb+srv://${process.env.API_USER}:${process.env.API_KEY}@${process.env.MONGO_ENDPOINT}/?retryWrites=true&w=majority`;
// Electricity emissions
const electric_url = 'https://api.eia.gov/v2/electricity/state-electricity-profiles/emissions-by-state-by-fuel/data/?frequency=annual&data[0]=co2-rate-lbs-mwh&data[1]=co2-thousand-metric-tons&facets[fuelid][]=ALL&start=2022&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key
// electricity cost
const electricity_cost_url = 'https://api.eia.gov/v2/electricity/retail-sales/data/?frequency=monthly&data[0]=price&facets[sectorid][]=RES&start=2023-10&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key
// Fuel oil cost and propane cost
const fuel_oil_cost_url = 'https://api.eia.gov/v2/petroleum/pri/wfr/data/?frequency=weekly&data[0]=value&facets[product][]=EPD2F&start=2023-12-18&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key
const propane_cost_url = 'https://api.eia.gov/v2/petroleum/pri/wfr/data/?frequency=weekly&data[0]=value&facets[product][]=EPLLPA&start=2023-12-18&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key
// Natural gas cost
const natural_gas_cost_url = 'https://api.eia.gov/v2/natural-gas/pri/sum/data/?frequency=monthly&data[0]=value&facets[process][]=PRS&start=2023-09&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key
//State energy breakdown
const breakdown_url =  'https://api.eia.gov/v2/electricity/electric-power-operational-data/data/?frequency=monthly&data[0]=consumption-for-eg-btu&facets[fueltypeid][]=ALL&facets[fueltypeid][]=AOR&facets[fueltypeid][]=COW&facets[fueltypeid][]=HYC&facets[fueltypeid][]=NG&facets[fueltypeid][]=NUC&facets[fueltypeid][]=PET&facets[fueltypeid][]=SUN&facets[fueltypeid][]=WND&facets[sectorid][]=1&start=2023-10&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=' + api_key// Define the cron schedule
// Define the cron schedule
const cron_schedule = '0 0 0 1 1 *'
// Define States
const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 
    'CO', 'CT', 'DE', 'FL', 'GA', 
    'HI', 'ID', 'IL', 'IN', 'IA', 
    'KS', 'KY', 'LA', 'ME', 'MD', 
    'MA', 'MI', 'MN', 'MS', 'MO', 
    'MT', 'NE', 'NV', 'NH', 'NJ', 
    'NM', 'NY', 'NC', 'ND', 'OH', 
    'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 
    'VA', 'WA', 'WV', 'WI', 'WY'
]; 

const fuelTypeMapping = {
    'ALL': 'All Fuels',
    'COW': 'Coal',
    'HYC': 'Hydro',
    'NG': 'Natural Gas',
    'NUC': 'Nuclear',
    'PET': 'Petroleum',
    'SUN': 'Solar',
    'WND': 'Wind'
};

const url_energy_cost_mapping = {
    [electricity_cost_url]: 'USD/btu electricity',
    [natural_gas_cost_url]: 'USD/btu natural gas',
    [fuel_oil_cost_url]: 'USD/btu fuel oil',
    [propane_cost_url]: 'USD/btu propane'
};

module.exports = {
    port,
    api_key,
    mongodb_connection,
    electric_url,
    breakdown_url,
    cron_schedule,
    states,
    fuelTypeMapping,
    url_energy_cost_mapping,
}