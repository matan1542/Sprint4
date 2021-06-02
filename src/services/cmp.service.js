import { httpService } from './http.service'
import { utilService } from './utils'
const STORAGE_KEY = 'cmp'
export const cmpService = {
    query,
    changeIds,
}

function query() {
    return httpService.get(STORAGE_KEY)
}

//Change all the Ids that been rendered to the page to avoid same id on elements
async function changeIds(primeCmp) {
    primeCmp.id = utilService.makeId(10)
    if (!primeCmp.cmps) return primeCmp
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
