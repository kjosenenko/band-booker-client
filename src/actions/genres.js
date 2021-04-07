export const getGenres = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("/genres")
        .then(r => r.json())
        .then(genres => dispatch({type:"SET_GENRES", genres}))
    }
}