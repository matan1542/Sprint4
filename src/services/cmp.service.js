import { httpService } from './http.service'
import { utilService } from './utils'
//const _ = require('lodash')
const STORAGE_KEY = 'cmp'
export const cmpService = {
    query,
    changeIds,
}

function query() {
    return httpService.get(STORAGE_KEY)
}

async function changeIds(primeCmp) {
    const clonedCmp = JSON.parse(JSON.stringify(primeCmp));
    if(!clonedCmp) return;
    if ((typeof(clonedCmp)==='object') && (clonedCmp.cmps) && (clonedCmp.cmps.constructor===Array)) changeRootsIds(clonedCmp)
    else clonedCmp.id = utilService.makeId(13)    
    return clonedCmp

    function changeRootsIds(cmp) {
        if (!cmp) return;
        if (cmp.id) {
            cmp.id = utilService.makeId(13);
        } if ((typeof(cmp)==='object') && (cmp.cmps) && (cmp.cmps.constructor===Array)) {
            for (var i=0; i < cmp.cmps.length; i++) {
                changeRootsIds(cmp.cmps[i]);
            }
        }
    }
}



  