export const getVenues = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("/venues")
        .then(r => r.json())
        .then(venues => dispatch({type:"SET_VENUES", venues}))
    }
}