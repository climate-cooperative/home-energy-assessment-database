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
  * We pull the historical temperature data by weather station from the [GHCNd](https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-daily)
  * We use an assumption around a 65° internal home temperature to determine heat degree and cooling degree days. We arrived at this number based on [EIA's definition](https://www.eia.gov/energyexplained/units-and-calculators/degree-days.php#:~:text=Heating%20degree%20days%20(HDDs)%20are,%C2%B0F%20has%2025%20HDDs).
* Ground Water Temperature (or Surface Water Temperature) (at a water site level
  * [USGS Water Service API](https://waterdata.usgs.gov/blog/dataretrieval/)
* Electricity Production Sources (at a state level)
* Natural Gas Utility Price (at a state level)
* Electricity Utility Price (at a state level)
* Other Fuel Prices (Propane, Fuel Oil, Kerosene, Wood, Wood Pellets) (at a national average level)
  * [EIA Open Data](https://www.eia.gov/opendata/)
    * Natural Gas - Monthly by State
    * Electricity - Monthly by State
    * Propane - Weekly by State
    * Heating Oil - Weekly by State
  * We'd like to use APIv2 to connect pull this data by state as frequently as it is updated.

Static Data:
* HVAC appliance efficiency
  * Every appliance category has its own measure e.g. SEER. 
* Appliance annual energy usage
  * Refrigerators and dishwashers and use what is on the tag.
* Zip code latitude and longitude
  * [Geo Names](https://download.geonames.org/export/zip/ )
* Home R values
  * We'd like a better source for this, it is a compilation of a variety of online sources for now.
* ACH values
  * We'd like a better source for this, for now we've used data from a home energy inspector.
* Water usage averages
  * [Florida Solar Energy Center](https://www.fsec.ucf.edu/en/publications/pdf/fsec-pf-464-15.pdf)
