const GameType = {
  NEW: 'GAME_NEW',
  NAME_CHANGE: 'GAME_NAME_CHANGE',
  CREATED: 'GAME_CREATED',
};

const GameActionner = {
  createNew: () => ({
    type: GameType.NEW,
  }),

  changeName: name => ({
    type: GameType.NAME_CHANGE,
    payload: name,
  }),

  gameCreated: name => ({
    type: GameType.CREATED,
    payload: name,
  }),
};

export { GameType, GameActionner };
