const initialState = {
    genres: []
}

const genresReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_GENRES":
            return {
                ...state,
                genres: action.genres
            }
        default:
            return state
    }
}

export default genresReducer