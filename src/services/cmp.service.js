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
// async function changeIds(primeCmp) {
//     primeCmp.id = utilService.makeId()
//     let cmps = [];
//     if (!primeCmp.cmps) return primeCmp
//     const res = await changeIdsToCmps(primeCmp)
//     return res
//     function changeIdsToCmps(cmp) {
//             cmp.cmps.forEach((target, index) => {
//                 target.id = utilService.makeId();
//                 if (target.cmps) {      // condition for checking Nesting
//                   return changeIdsToCmps(target)
//                 }
//             })
//             return cmp
  
//     }
// }

async function changeIds(primeCmp) {
    if (!primeCmp) return;
    if (primeCmp.id) {
        primeCmp.id = utilService.makeId();
    } if ((typeof(primeCmp)==='object') && (primeCmp.cmps) && (primeCmp.cmps.constructor===Array)) {
        for (var i=0; i < primeCmp.cmps.length; i++) {
            changeIds(primeCmp.cmps[i]);
        }
    }
    return primeCmp;
}
