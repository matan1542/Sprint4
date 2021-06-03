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

// // Change all the Ids that been rendered to the page to avoid same id on elemen ts  cmp.cmps[1].id =  .cmps 
// async function changeIds(primeCmp) {
//     const clonedCmp = JSON.parse(JSON.stringify(primeCmp));

//     clonedCmp.id = utilService.makeId()
//     if (!clonedCmp.cmps) return clonedCmp
//     const res = await changeIdsToCmps(clonedCmp)
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




  