const initialState = {
    slots: [],
    loading: true
}

const scheduleReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "SET_LINEUP":
            return {
                ...state,
                loading: false,
                lineup: action.lineup
            }
        default:
            return state
    }
}

export default scheduleReducer