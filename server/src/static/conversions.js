// 3412 BTU/kWh
const mhw_to_btu_conversion = 3.412 * (10**6);
// 1,000,000 BTU/Mcf
const mcf_to_btu_conversion = 1 * (10**6);
// 91,452 BTU/gal for propane
const propane_to_btu_conversion = 91452;
// 138500 BTU/gal for heating oil
const heating_oil_to_btu_conversion = 138500;

// map conversions to units
const energy_conversions = {
    'Electricity': mhw_to_btu_conversion,
    'Natural Gas': mcf_to_btu_conversion,
    'Propane': propane_to_btu_conversion,
    'No 2 Fuel Oil / Heating Oil': heating_oil_to_btu_conversion
};

const fuelTypeMapping = {
    'ALL': 'All Fuels',
    'COW': 'Coal',
    'HYC': 'Hydro',
    'NG': 'Natural Gas',
    'NUC': 'Nuclear',
    'PET': 'Petroleum',
    'SUN': 'Solar',
    'WND': 'Wind',
    'AOR': 'All Renewable'
};

module.exports = {
    energy_conversions,
    fuelTypeMapping
};