const game = {game:{}, screenshots:{}};

const gameReducer = (state = game, action) => {
  switch (action.type) {
    case "GET_GAME":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
      case "EMPTY_GAME":
      return {
        ...state,
        game: {},
        screenshots: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default gameReducer;
