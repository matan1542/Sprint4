// import {waps} from '../../wap.json'
// import {wapService} from '../../services/wap.service'
const initialState = {
    waps: null,
    cmps: null,
    currCmp: null
};
export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CMPS':
            return { ...state, cmps: action.cmps }
        case 'ADD_WAP':
            return { ...state, waps: [action.wap, ...state.waps] }
        case 'SET_WAPS':
            return { ...state, waps: action.waps }
        case 'REMOVE_WAP':
            return { ...state, waps: state.waps.filter(wap => wap._id !== action.wapId) }
        case 'ADD_CMP':
            return { ...state, currWap: { ...state.currWap, cmps: [...state.currWap.cmps, action.cmp] } }
        case 'SET_CURR_CMP':
            return { ...state, currCmp: { ...action.currCmp } }
        case 'UPDATE_WAP':
            return { ...state, waps: [...state.waps.slice(0, action.idx), { ...action.wap }, ...state.waps.slice(action.idx + 1)] }
        case 'SET_FILTER_BY':
            return { ...state, filterBy: { ...action.filterBy } }
        default:
            return state
    }
}
