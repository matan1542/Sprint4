import { storageService } from './async-storage.service.js'
const _ = require('lodash');


window.storageService = storageService;



const STORAGE_KEY = 'waps'

export const wapService = {
    query,
    getById,
    save,
    remove,
    // getCmpById,
    // saveCmp,
    // removeCmp,
    getTarget,
    updateTarget,
    deleteTarget,
    addCmp
}




function query() {
    return storageService.query(STORAGE_KEY)
}

async function getById(wapId) {
    return await storageService.get(STORAGE_KEY, wapId)
}

function remove(wapId) {
    return storageService.remove(STORAGE_KEY, wapId)
}

function save(wap) {
    if (wap._id) {
        return storageService.put(STORAGE_KEY, wap)
    } else {
        return storageService.post(STORAGE_KEY, wap)
    }
}

async function updateTarget(wap, id, updateData) {
    try {
        const target = await getTarget(wap, id);
        Object.assign(target, updateData);
        return wap;
    } catch (err) {
        throw new Error(err)
    }
}

async function getTarget(targetWap, id) {
    const res = await findTarget(targetWap)
    return res
    function findTarget(target) {
        try {
            if (target?.id === id) {
                return target;
            }
            // return (target.cmps || target?.cmps || [])
            return (target?.cmps || [])
                .map(cmp => findTarget(cmp))
                .filter(res => _.isObject(res))[0];
        } catch (err) {
            throw new Error(err)
        }
    }
}

async function addCmp(wap,cmp){
    try{
        wap.cmps.push(cmp);
        return wap
    } catch (err) {
        throw new Error('Had problem from service in addCmp',err)
    }
}

async function deleteTarget(wap, passedId) {
    try {
        wap.cmps.forEach((target, index) => {
            if (target.id === passedId) {
                console.log(index)
                wap.cmps.splice(index, 1)
            }
            if (target.cmps) {      // condition for checking Nesting
                deleteTarget(target, passedId)
            }
        })
        save(wap)
        return wap
    } catch (err) {
        throw new Error('Problem in delete function');
    }
}