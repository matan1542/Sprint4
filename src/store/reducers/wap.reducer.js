// import {waps} from '../../wap.json'
// import {wapService} from '../../services/wap.service'
const initialState = {
    waps: null,
    cmps: null,
    currCmp: null,
    wapToEdit: null
};
export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CMPS':
            return { ...state, cmps: action.cmps }
        case 'ADD_WAP':
            return { ...state, waps: [action.wap, ...state.waps] }
        case 'SET_WAP_TO_EDIT':
            return { ...state, wapToEdit: action.wapToEdit }
        case 'SET_WAPS':
            return { ...state, waps: action.waps }
        default:
            return state
    }
}
