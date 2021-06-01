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
    return storageService.get(STORAGE_KEY, cmpId);
}

//Change all the Ids that been rendered to the page to avoid same id on elements
async function changeIds(primeCmp) {
    primeCmp.id = utilService.makeId()
    if (!primeCmp?.cmps) return primeCmp
    const res = await changeIdsToCmps(primeCmp)
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
