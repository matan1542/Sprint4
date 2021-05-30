import { storageService } from './async-storage.service'
import { utilService } from './utils'
const STORAGE_KEY = 'cmps'
export const cmpService = {
    query,
    changeIds,
    getCmpsById
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getCmpsById(cmpId) {
    console.log('cmpId', cmpId)
    return storageService.get(STORAGE_KEY, cmpId);
}

//Change all the Ids that been rendered to the page to avoid same id on elements
async function changeIds(primeCmp) {
    console.log('primeCmp', primeCmp)
    primeCmp.id = utilService.makeId()
    if (primeCmp.cmps && primeCmp.cmps.length) { }
    const res = await changeIdsToCmps(primeCmp)
    console.log("🚀 ~ file: cmp.service.js ~ line 25 ~ changeIds ~ res", res)
    return res
    function changeIdsToCmps(cmp) {
        cmp.cmps.forEach((target, index) => {
            target.id = utilService.makeId();
            if (target.cmps) {      // condition for checking Nesting
                changeIdsToCmps(target)
            }
        })
        return cmp
    }
}
