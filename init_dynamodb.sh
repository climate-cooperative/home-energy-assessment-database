#!/bin/bash

# **** APPLIANCE TABLE ****
awslocal dynamodb create-table \
    --table-name appliance_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name appliance_table \
    --item '{
                "unit": {"S": "kwh"} , 
                "lifespan": {"N": "12"},
                "_id": {"S": "6572424b530d7b4310456b76"},
                "per_year": {"N": "139"},
                "appliance": {"S": "stove"},
                "unique_id": {"S": "1662765633488x566876457883010750"},
                "avg_price": {"N": "691"},
                "fuel_type": {"S": "electricity"}
            }' \
    --region us-west-2

# **** BIOMASS TABLE ****
awslocal dynamodb create-table \
    --table-name biomass_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name biomass_table \
    --item '{
                "_id": {"S": "65a97f9b7032768b5f429a08"},
                "date": {"S": "2023-10"},
                "usd-ton": {"S": "228.75"},
                "name": {"S": "wood"}
            }' \
    --region us-west-2

# **** HOMEDECADE TABLE
awslocal dynamodb create-table \
    --table-name home_decade_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name home_decade_table \
    --item '{
                "_id": { "S": "6572421f5c6f3247a090be0c" },
                "decade": { "S": "1940-1949" },
                "prob_of_insulation": { "N": "0.7" },
                "insulation": { "S": "Fiberglass" },
                "insulation_r/in": { "N": "3.14" },
                "wall_insulation_r": { "N": "10.99" },
                "wall_construction": { "N": "4.38" },
                "wall_siding": { "N": "1.4" },
                "wall_r": { "N": "13.47" },
                "attic_insulation_r": { "N": "23.55" },
                "joist": { "N": "4.38" },
                "roof": { "N": "1.4" },
                "attic_r": { "N": "22.265" },
                "ach": { "N": "0.75" }
            }' \
    --region us-west-2

# **** HOMETYPE TABLE ****
awslocal dynamodb create-table \
    --table-name home_type_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name home_type_table \
    --item '{
                "_id": { "S": "657241ebd1671b78e5d355f9" },
                "home_type": { "S": "Apartment or Condo" },
                "shared_walls": { "N": "3" },
                "shared_ceilings": { "N": "1" }
            }' \
    --region us-west-2

# **** HVAC TABLE ****
awslocal dynamodb create-table \
    --table-name hvac_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name hvac_table \
    --item '{
                "_id": { "S": "65737d7c936e49e28f2fc3cc" },
                "cost": { "N": "300" },
                "default_unit-type": { "S": "" },
                "description": {
                    "S": "A portable AC unit is a portable air conditioning system that can be moved from room to room. It consists of an evaporator, a compressor, and a condenser, and it is designed to cool a single room or small area."
                },
                "efficiency": { "N": "2.64" },
                "external_link": { "S": "https://zwellhome.com/learn/hvac/" },
                "fuel": { "S": "electricity" },
                "function": { "S": "cooling" },
                "icon": {
                    "S": "//s3.amazonaws.com/appforest_uf/f1672980104589x542622914672405300/Icon_PortableAC_Grey.svg"
                },
                "lifespan": { "N": "6" },
                "system": { "S": "portable ac unit" },
                "creation_date": { "S": "########" },
                "modified_date": { "S": "########" },
                "slug": { "S": "" },
                "creator": { "S": "(App admin)" },
                "unique_id": { "S": "1673572752154x986440559365401700" },
                "display_name": { "S": "Portable AC Unit" }
            }' \
    --region us-west-2

# **** STATE TABLE ****
awslocal dynamodb create-table \
    --table-name state_table \
    --attribute-definitions AttributeName=_id,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name state_table \
    --item '{
                "_id": { "S": "659c6233d61ba4e1468b5321" },
                "state": { "S": "Alabama" },
                "abbreviation": { "S": "AL" },
                "state_emissions": {
                    "L": [
                    {
                        "M": {
                        "co2_lbs/mhw": { "N": "794" },
                        "co2_lbs/btu": { "N": "0.00023270808909730363" },
                        "co2_net_emission_estimate": { "S": "9,977" },
                        "date": { "S": "2022" }
                        }
                    }
                    ]
                },
                "state_energy_costs": {
                    "L": [
                    {
                        "M": {
                        "usd/btu_electricity": { "N": "0.0000044021101992966004" },
                        "usd/btu_natural_gas": { "N": "0.00002789" },
                        "usd/btu_propane": { "N": "0.00003464112321217688" },
                        "usd/btu_fuel_oil": { "N": "0.00001952346570397112" },
                        "date": { "S": "2023-12-27" }
                        }
                    }
                    ]
                },
                "state_energy_breakdown": {
                    "L": [
                    {
                        "M": {
                        "all_fuels": { "N": "67.8007" },
                        "natural_gas": { "N": "12.6686" },
                        "petroleum": { "N": "0.00217" },
                        "coal": { "N": "14.11617" },
                        "nuclear": { "N": "37.69161" },
                        "hydro": { "N": "3.31545" },
                        "wind": { "N": "0" },
                        "solar": { "N": "0.00671" },
                        "other_renewable": { "N": "0" },
                        "date": { "S": "2023-10" },
                        "units": { "S": "million MMBtu" }
                        }
                    }
                    ]
                }
            }' \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name state_table \
    --item '{
                "_id": { "S": "659c6233d61ba4e1468b5340" },
                "state": { "S": "New York" },
                "abbreviation": { "S": "NY" },
                "state_emissions": {
                    "L": [
                    {
                        "M": {
                        "co2_lbs/mhw": { "N": "541" },
                        "co2_lbs/btu": { "N": "0.00015855803048065651" },
                        "co2_net_emission_estimate": { "S": "11,534" },
                        "date": { "S": "2022" }
                        }
                    }
                    ]
                },
                "state_energy_costs": {
                    "L": [
                    {
                        "M": {
                        "usd/btu_electricity": { "N": "0.000006652989449003517" },
                        "usd/btu_natural_gas": { "N": "0.000020969999999999997" },
                        "usd/btu_propane": { "N": "0.00003582207059441018" },
                        "usd/btu_fuel_oil": { "N": "0.000030122743682310467" },
                        "date": { "S": "2023-12-27" }
                        }
                    }
                    ]
                },
                "state_energy_breakdown": {
                    "L": [
                    {
                        "M": {
                        "all_fuels": { "N": "15.6124" },
                        "natural_gas": { "N": "8.82411" },
                        "petroleum": { "N": "0.07999" },
                        "coal": { "N": "0" },
                        "nuclear": { "N": "0" },
                        "hydro": { "N": "6.62945" },
                        "wind": { "N": "0.07885" },
                        "solar": { "N": "0" },
                        "other_renewable": { "N": "0" },
                        "date": { "S": "2023-10" },
                        "units": { "S": "million MMBtu" }
                        }
                    }
                    ]
                }
            }' \
    --region us-west-2


# **** ZIPCODE TABLE ****
awslocal dynamodb create-table \
    --table-name zipcode_table \
    --attribute-definitions AttributeName=_id,AttributeType=S AttributeName=zipcode,AttributeType=S \
    --key-schema AttributeName=_id,KeyType=HASH AttributeName=zipcode,KeyType=RANGE \
    --global-secondary-indexes 'IndexName=zipcode-index,KeySchema=[{AttributeName=zipcode,KeyType=HASH}],Projection={ProjectionType=ALL}' \
    --billing-mode PAY_PER_REQUEST \
    --region us-west-2

awslocal dynamodb put-item \
    --table-name zipcode_table \
    --item '{
                "_id": { "S": "659c61fe32efd4163615703d" },
                "state": { "S": "NY" },
                "zipcode": { "S": "10001" },
                "primary_city": { "S": "New York" },
                "latitude": { "N": "40.75" },
                "longitude": { "N": "-74" },
                "degree_days": {
                    "M": {
                    "heating_degree_days": { "N": "4131" },
                    "cooling_degree_days": { "N": "1479" },
                    "site": {
                        "M": {
                        "site_id": { "S": "GHCND:USW00014732" },
                        "site_name": { "S": "LAGUARDIA AIRPORT, NY US" },
                        "station_distance": { "N": "0.1232987242" }
                        }
                    }
                    }
                },
                "water_temperature_data": {
                    "M": {
                    "water_temperature": { "N": "56.84641096" },
                    "site": {
                        "M": {
                        "site_id": { "N": "1302250" },
                        "site_name": { "S": "EAST CREEK AT SANDS POINT NY" },
                        "station_distance": { "N": "0.31224171" }
                        }
                    }
                    }
                }
            }' \
    --region us-west-2