import * as authReducer from '../../app/features/auth/auth.reducer';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  auth: authReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
