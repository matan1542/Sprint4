

export function setMsg(msg, kind) {
    console.log('in setMsg', msg);
    console.log("🚀 ~ file: user.msg.actions.js ~ line 4 ~ setMsg ~ type", kind)
    return dispatch => {
        dispatch({ type: 'SET_MSG', msg, kind })
    }
}