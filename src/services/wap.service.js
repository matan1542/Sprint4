import { storageService } from './async-storage.service'
import { httpService } from './http.service'

const _ = require('lodash');


window.storageService = storageService;



const STORAGE_KEY = 'waps'

export const wapService = {
    query,
    save,
    remove,
    create,
    getTarget,
    updateTarget,
    deleteTarget,
    addCmp
}




async function query() {
    return await httpService.get('wap')
}

async function create() {
    const wap =
    {
        "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
        "createdBy": "5e26e0b718a0891d4c995527",
        cmps: []
    }
    return wap
}


function remove(wapId) {
    return storageService.remove(STORAGE_KEY, wapId)
}

async function save(wap) {
    if (wap._id) {
        const newWap = await storageService.put(STORAGE_KEY, wap)
        return newWap
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

async function addCmp(wap, cmp, idx) {
    try {
        const oneWapHalf = wap.cmps.slice(0, idx)
        oneWapHalf.push(cmp);
        const otherWapHalf = wap.cmps.slice(idx)
        const wapObj = { ...wap, cmps: [...oneWapHalf.concat(otherWapHalf)] }
        //  const wapObj = { ...wap, cmps: [...wap.cmps.slice(0, idx),cmp, ...wap.cmps.slice(idx)] }
        //  save(wapObj)
        return wapObj
    } catch (err) {
        throw new Error('Had problem from service in addCmp', err)
    }
}

async function deleteTarget(wap, passedId) {
    try {
        wap.cmps.forEach((target, index) => {
            if (target.id === passedId) {
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