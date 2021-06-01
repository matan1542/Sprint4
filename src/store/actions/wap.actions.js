import { wapService } from '../../services/wap.service.js'
import { cmpService } from '../../services/cmp.service.js'

export function loadWaps() { // Action Creator
    return async dispatch => {
        try {
            const waps = await wapService.query()
            console.log('waps', waps)
            const action = {
                type: 'SET_WAPS',
                waps
            }
            dispatch(action);
        } catch (err) {
            throw new Error('Error in loadWaps  :', err)
        }
    }
}

//Load all the saved cmps on the storage
export function loadCmps() {
    return async dispatch => {
        try {
            const cmps = await cmpService.query()
            console.log('cmps', cmps)
            const action = {
                type: 'SET_CMPS',
                cmps
            }
            dispatch(action);
        } catch (err) {
            throw new Error('Error in loadCmps  :', err)
        }
    }
}

