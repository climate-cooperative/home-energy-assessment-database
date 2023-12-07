# home-energy-data
Documentation, conversions, and data supporting Zwell's home energy audit and calculation tools.

* [Energy conversions](https://docs.google.com/document/d/1gqgwpOMkCsCWgHzdk7omc0xRaLz4ZHW64pKcWLB7BS4/edit?usp=sharing)
* Appliance table
* Fuel/utility cost table
* State electricity production data
* Zip code data (weather stations, water sites)
* Solar insolation logic
* Heating & cooling logic
* Water heating logic
* Energy generation logic
* CO2 emissions logic
* Operating cost logic

Dynamic Data:
* Heating Degree Days & Cooling Degree Days (at a weather station level)
* Ground Water Temperature (or Surface Water Temperature) (at a water site level)
* Electricity Production Sources (at a state level)
* Natural Gas Utility Price (at a state level)
* Electricity Utility Price (at a state level)
* Other Fuel Prices (Propane, Fuel Oil, Kerosene, Wood, Wood Pellets) (at a national average level)
  * [EIA Open Data](https://www.eia.gov/opendata/)
    * Natural Gas
    * Propane
    * Electricity
    * Petroleum (Heating Oil)
  * We'd like to use APIv2 to connect pull this data by state as frequently as it is updated.

Static Data:
* HVAC appliance efficiency
* Appliance annual energy usage
* Zip code latitude and longitude
* Home R values
* ACH values
* Water usage averages
