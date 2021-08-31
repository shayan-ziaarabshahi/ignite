const initialState = {
    popular:[],
    newGames:[],
    upcoming:[],
    searchedGames:[]
}
const gamesReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES" :
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
            }
        case 'SEARCHED_GAMES':
            return {
                ...state,
                searchedGames:action.payload.data.results
            }
        case 'EMPTY_SEARCH':
            return {
                ...state,
                searchedGames:[]
            }
        default :
            return {...state}
    }
}

export default gamesReducer