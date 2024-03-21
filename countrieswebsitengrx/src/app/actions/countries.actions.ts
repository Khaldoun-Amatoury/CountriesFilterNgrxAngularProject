import { createAction, props } from '@ngrx/store';

export const highlightRegion = createAction(
  '[Region Highlight] Highlight Region',
  props<{ highlightedCountry: string }>()
);
