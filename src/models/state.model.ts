export interface StateModel {
  _id: string;
  state: string;
  abbreviation: string;
  state_emissions: StateEmission[];
  state_energy_costs: StateEnergyCost[];
  state_energy_breakdown: StateEnergyBreakdown[];
}

export interface StateEmission {
  'co2_lbs/mhw': number;
  'co2_lbs/btu': number;
  co2_net_emission_estimate: string;
  date: string;
}

export interface StateEnergyCost {
  'usd/btu_electricity': number;
  'usd/btu_natural_gas': number;
  'usd/btu_propane': number;
  'usd/btu_fuel_oil': number;
  date: string;
}

export interface StateEnergyBreakdown {
  all_fuels: number;
  natural_gas: number;
  petroleum: number;
  coal: number;
  nuclear: number;
  hydro: number;
  wind: number;
  solar: number;
  other_renewable: number;
  date: string;
  units: string;
}
