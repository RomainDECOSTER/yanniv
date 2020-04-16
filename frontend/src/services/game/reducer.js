import { GameType } from '.';

const initialState = {
  name: null,
  created: false,
  openCreate: false,
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GameType.NEW:
      return { ...state, openCreate: true };
    case GameType.NAME_CHANGE:
      return { ...state, name: action.payload };
    case GameType.CREATED:
      return { ...state, name: action.payload, openCreate: false, created: true };
    default:
      return state;
  }
};

export { GameReducer };
