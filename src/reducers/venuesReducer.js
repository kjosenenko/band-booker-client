const initialState = {
    venues: []
}

const venuesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_VENUES":
            return {
                ...state,
                venues: action.venues
            }
        default:
            return state
    }
}

export default venuesReducer