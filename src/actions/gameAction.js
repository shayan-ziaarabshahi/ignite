import axios from "axios";
import { game, screenshots } from "../api";

export const gameAction = (id) => async (dispatch) => {
  const gameData = await axios.get(game(id));
  const screenshotsData = await axios.get(screenshots(id));
  dispatch({
    type: "GET_GAME",
    payload: {
      game: gameData.data,
      screenshots: screenshotsData.data,
    },
  });
};

export const emptyGame = () => {
  return {
    type: "GET_GAME",
    payload: {
      game: {},
      screenshots: {},
    },
  };
};
