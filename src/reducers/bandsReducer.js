const initialState = {
    bands: []
}

const bandsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_BANDS":
            return {
                ...state,
                bands: action.bands
            }
        default:
            return state
    }
}

export default bandsReducer