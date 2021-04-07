export const getBands = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("/bands")
        .then(r => r.json())
        .then(bands => dispatch({type:"SET_BANDS", bands}))
    }
}