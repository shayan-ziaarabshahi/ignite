import { combineReducers } from "redux";
import gamesReducer from './gamesReducer'
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
    games: gamesReducer,
    game: gameReducer
})

export default rootReducer;