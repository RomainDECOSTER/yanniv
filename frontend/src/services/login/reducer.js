import { LoginType } from '.';

const initialState = {
  username: null,
  token: null,
  isAuthenticated: false,
  open: true,
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginType.USERNAME_CHANGE:
      return { ...state, username: action.payload };
    case LoginType.USERNAME_SET:
      return { ...state, username: action.payload };
    case LoginType.SET_AUTH:
      return {
        ...state,
        token: action.payload,
      };
    case LoginType.LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
        open: false,
      };
    case LoginType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export { AuthenticationReducer };
