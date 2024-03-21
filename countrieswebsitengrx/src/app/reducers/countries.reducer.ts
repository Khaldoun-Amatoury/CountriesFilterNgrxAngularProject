import {Action, createReducer, on} from "@ngrx/store";
import {highlightRegion} from "../actions/countries.actions";

 export interface StateModel {
   highlightedCountry: string;
 }

 export const initialState: StateModel = {
   highlightedCountry: ''
 }

const _highlightedRegionReducer = createReducer(
  initialState,
  on(highlightRegion, (state, param: { highlightedCountry: string }) => ({
    ...state,
      highlightedCountry: param.highlightedCountry
  }))
);


export function highlightedRegionReducer(state: StateModel = { highlightedCountry: ''} , action: Action) {
  return _highlightedRegionReducer(state, action);
}
