export const getLineup = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("/show_sets")
        .then(r => r.json())
        .then(lineup => dispatch({type:"SET_LINEUP", lineup}))
    }
}