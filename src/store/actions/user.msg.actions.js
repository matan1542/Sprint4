

export function setMsg(msg, kind) {
    return dispatch => {
        dispatch({ type: 'SET_MSG', msg, kind })
    }
}