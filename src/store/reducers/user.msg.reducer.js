
const initialState = {
    msg: '',
    type: ''
}

export function userMsgReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_MSG':
            return { ...state, msg: action.msg, type: action.type }
        default:
            return state
    }
}