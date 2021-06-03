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
    primeCmp.id = utilService.makeId()
    let cmps = [];
    if (!primeCmp.cmps) return primeCmp
    const res = await changeIdsToCmps(primeCmp)
    console.log('res',res)
    return res
    function changeIdsToCmps(cmp) {
           return cmp.cmps?.map((target, index) => {
                target.id = utilService.makeId();
                changeIdsToCmps(target)
               return target
            })
           
    }
}
