import { httpService } from './http.service'
import { utilService } from './utils'
const _ = require('lodash')
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
    if (!primeCmp.cmps) return primeCmp
    // await changeIdsToCmps(primeCmp)
    for (let idx in primeCmp.cmps) {
        primeCmp.cmps[idx].id = utilService.makeId()
        if (primeCmp.cmps[idx].cmps) {      // condition for checking Nesting
            changeIds(primeCmp.cmps[idx])
        }
    }

    console.log("🚀 ~ file: cmp.service.js ~ line 37 ~ changeIds ~ primeCmp", primeCmp)
    return primeCmp
    // function changeIdsToCmps(cmp) {
    //     cmp.cmps.forEach((target, index) => {
    //         target.id = utilService.makeId()
    //         if (target.cmps) {      // condition for checking Nesting
    //             changeIdsToCmps(target)
    //         }
    //     })
    // }
}



// async function changeIds(cmp) {
//     const res = await changeIdsToCmps(cmp)
//     return res
//     function changeIdsToCmps(target) {
//         try {
//             target.id = utilService.makeId()
//             return (target.cmps || [])
//                 .map(cmp => changeIdsToCmps(cmp))
//                 .filter(res => _.isObject(res))[0];
//         } catch (err) {
//             throw new Error(err)
//         }
//     }
// }
