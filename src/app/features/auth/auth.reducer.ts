import { AuthActions, AuthActionTypes, Login, Logout } from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  userName?: string;
}

export const initialState: State = {
  userName: null,
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return handleLogin(state, action);
    case AuthActionTypes.LOGOUT:
      return handleLogout(state, action);
    default:
      return state;
  }
}

function handleLogin(state: State, action: Login) {
  return { ...state, userName: action.payload };
}

function handleLogout(state: State, action: Logout) {
  return { ...state, userName: null };
}
