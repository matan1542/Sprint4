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
            console.log('cmp', currCmp)
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

export function addCmp(wapObj, cmpObj) {
    return async dispatch => {
        try {
            const wap = await wapService.addCmp(wapObj, cmpObj)
            const action = {
                type: 'SET_CURR_WAP',
                wap
            }
            dispatch(action)
        } catch (err) {
            throw new Error('Had probelm trying to addCmp', err)
        }
    }

}



export function updateCurrCmp(wapObj, id, updateData) {
    // console.log('causing problems updateCurrCmp', wapObj)
    // console.log('updateData', updateData, 'id', id)
    return async dispatch => {
        try {
            const wap = await wapService.updateTarget(wapObj, id, updateData)
            // console.log('wapObj', updateData)
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
    console.log("🚀 ~ file: wap.actions.js ~ line 122 ~ updateWap ~ wapObj", wapObj)
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
            // console.log('wapObj', wapObj, 'passedId', passedId)
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
// export function setToys(toys) {
//     return dispatch => {
//         const action = {
//             type: 'SET_TOYS',
//             toys
//         }
//         dispatch(action);
//     }
// }


// export function removeToy(toyId) { // Action Creator
//     console.log(toyId)
//     return async dispatch => {
//         try {
//             await toyService.remove(toyId)
//             const action = {
//                 type: 'REMOVE_TOY',
//                 toyId
//             }
//             dispatch(action)
//         } catch (err) {
//             console.log('Error on toyActions in remove :', err);
//         }

//     }
// }

// export function setSelectedToy(toy) {
//     console.log('setSelected', toy)
//     return dispatch => {
//         const action = {
//             type: 'SET_SELECTED_TOY',
//             toy
//         }
//         dispatch(action)
//     }
// }

// export function saveToy(toy) { // Action Creator
//     return async dispatch => {
//         try {
//             const savedToy = await toyService.save(toy)
//             const action = {
//                 type: 'ADD_TOY',
//                 toy: savedToy
//             }
//             dispatch(action)
//         } catch (err) {
//             console.log('Error in toyActions on save :', err);
//         }
//     }
// }
// export function setFilterBy(filterBy) {
//     return dispatch => {
//         const action = {
//             type: 'SET_FILTER_BY',
//             filterBy
//         }
//         dispatch(action)
//     }
// }

// export function updateToy(toy) { // Action Creator
//     return async dispatch => {
//         try {
//             const savedToy = await toyService.save(toy)
//             const action = {
//                 type: 'UPDATE_TOY',
//                 toy: savedToy.updateToy,
//                 idx: savedToy.idx
//             }
//             dispatch(action)
//         } catch (err) {
//             console.log('Error in toyActions on update :', err);
//         }
//     }
// }