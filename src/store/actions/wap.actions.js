import { wapService } from '../../services/wap.service.js'
import { cmpService } from '../../services/cmp.service.js'

export function loadWaps() { // Action Creator
    return async dispatch => {
        try {
            const waps = await wapService.query()
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


//Change the all the ids for the cmps for render purpses
export function changeCmpsIds(cmpObj) {
    return async dispatch => {
        try {
            const currCmp = await cmpService.changeIds(cmpObj)
            const action = {
                type: 'SET_CURR_CMP',
                currCmp
            }
            dispatch(action)
            return currCmp
        } catch (err) {
            throw new Error('Error in changeCmpsIds  :', err)
        }
    }
}
//funciton that would get the current wap according to his id
export function getById(wapId) {
    return async dispatch => {
        try {
            const wap = await wapService.getById(wapId)
            const action = {
                type: 'SET_CURR_WAP',
                wap
            }
            dispatch(action);
        } catch (err) {
            throw Error(/* 'Had probelm with the getById func', */ err)
        }
    }
}



export function setCurrCmp(currCmp) {

    return async dispatch => {
        try {
            const action = {
                type: 'SET_CURR_CMP',
                currCmp
            }
            dispatch(action);
        } catch (err) {
            throw Error('Had probelm with the getById func', err)
        }
    }
}

export function addCmp(wapObj, cmpObj, idx) {
    return async dispatch => {
        try {
            const wap = await wapService.addCmp(wapObj, cmpObj, idx)
            const action = {
                type: 'SET_CURR_WAP',
                wap
            }
            dispatch(action)
            return wap
        } catch (err) {
            throw new Error('Had probelm trying to addCmp', err)
        }
    }

}



export function updateCurrCmp(wapObj, id, updateData) {
    return async dispatch => {
        try {
            const wap = await wapService.updateTarget(wapObj, id, updateData)
            const action = {
                type: 'SET_CURR_WAP',
                wap
            }
            dispatch(action)
        } catch (err) {
            throw new Error(err);
        }
    }
}

export function updateWap(wapObj) {
    return async dispatch => {
        try {
            const wap = await wapService.save(wapObj)
            const action = {
                type: 'SET_CURR_WAP',
                wap: wap.updatedEntity
            }
            dispatch(action)
        } catch (err) {
            throw new Error(err);
        }
    }
}

export function deleteCmp(wapObj, passedId) {
    return async dispatch => {
        try {
            const wap = await wapService.deleteTarget(wapObj, passedId)
            const action = {
                type: 'SET_CURR_WAP',
                wap
            }
            dispatch(action)
        } catch (err) {

        }
    }
}
