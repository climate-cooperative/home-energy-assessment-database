export interface ZipcodeModel {
  _id: string;
  state: string;
  zipcode: string;
  primary_city: string;
  latitude: number;
  longitude: number;
  degree_days: DegreeDay;
  water_temperature_data: WaterTempDate;
}

export interface DegreeDay {
  heating_degree_days: number;
  cooling_degree_days: number;
  site: Site;
}

export interface WaterTempDate {
  water_temperature: number;
  site: Site;
}

interface Site {
  site_id: string;
  site_name: string;
  station_distance: number;
}
