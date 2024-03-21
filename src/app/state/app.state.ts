import { Country } from '../models/country.model';

export interface AppState {
  countries: Country[];
  regions: {
    [region: string]: Country[];
  };
}
