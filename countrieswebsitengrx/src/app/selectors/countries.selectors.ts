import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AppState } from '../state/app.state';
import {StateModel} from "../reducers/countries.reducer";

export const getCountriesState = createFeatureSelector<StateModel>('countries');

// export const selectCountries = (state: StateModel) => state.countries;
export const selectRegions = (state: StateModel) => state?.highlightedCountry;



export const selectRegionCountries = createSelector(
  getCountriesState,
  selectRegions
);
