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
// async function changeIds(primeCmp) {
//     primeCmp.id = utilService.makeId(10)
//     if (primeCmp.cmps) {
//         primeCmp.cmps.forEach(cmp => {
//             cmp = changeIds(cmp)
//         })
//     }
//     return primeCmp


async function changeIds(primeCmp) {
    console.log('primeCmp:', primeCmp)
    if (!primeCmp) return;
    if (primeCmp.id) {
        primeCmp.id = utilService.makeId(10);
    } if ((typeof(primeCmp)==='object') && (primeCmp.cmps) && (primeCmp.cmps.constructor===Array)) {
        for (var i=0; i < primeCmp.cmps.length; i++) {
            changeIds(primeCmp.cmps[i]);
        }
    }
}
    
    // updateObjectByID(this.Steps, 11, 'String to be set');
    //     if (!primeCmp.cmps) return primeCmp
    //     const res = await changeIdsToCmps(primeCmp)
    //     return res
    //     function changeIdsToCmps(cmp) {
    //         cmp.cmps.forEach((target, index) => {
    //             target.id = utilService.makeId();
    //             if (target.cmps) {      // condition for checking Nesting
    //                 changeIdsToCmps(target)
    //             }
    //         })
    //         return cmp
    //     }
// }
//     console.log('changeId',primeCmp)
//     primeCmp.id = utilService.makeId()
//     if (!primeCmp.cmps) return primeCmp
//     await changeIdsToCmps(primeCmp)
//     console.log('After change ids',primeCmp)

//     return primeCmp
//     function changeIdsToCmps(cmp) {
//         cmp.cmps.forEach((target, index) => {
//             target.id = utilService.makeId()
//             if (target.cmps) {      // condition for checking Nesting
//                 changeIdsToCmps(target)
//             }
//         })
//     }
// }

// async function changeIds(cmp) {
//     const res = await changeIdsToCmps(cmp)
//     return res
//       function changeIdsToCmps(target) {
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
