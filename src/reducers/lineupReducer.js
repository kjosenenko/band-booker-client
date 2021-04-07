const initialState = {
    lineup: []
}

const lineupReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_LINEUP":
            return {
                ...state,
                lineup: action.lineup
            }
        default:
            return state
    }
}

export default lineupReducer