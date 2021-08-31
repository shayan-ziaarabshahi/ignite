import axios from "axios";
import { popular_games, upcoming_games, new_games, searched_games } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popular_games());
  const newGamesData = await axios.get(new_games());
  const upcomingData = await axios.get(upcoming_games());
  
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,      
    },
  });
};

export const searchedGames = (searchText) => async (dispatch) => {
  const searchData = await axios.get(searched_games(searchText))
  dispatch({
    type:'SEARCHED_GAMES',
    payload: searchData
  })
}