import { wap } from '../data/wap.test.data'
import { cmp } from '../data/cmps'
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    save
}

function query(entityType, delay = 0) {
    var entities = JSON.parse(localStorage.getItem(entityType))

    if ((!entities || !entities.length)) {
        if (entityType === 'waps') {
            entities = wap
        } else entities = cmp

        save(entityType, entities)
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}


async function get(entityType, entityId) {
    const entities = await query(entityType)
    return entities.find(entity => entity._id === entityId || entity.id === entityId)
}
async function post(entityType, newEntity) {
    newEntity._id = _makeId()
    const entities = await query(entityType)
    entities.push(newEntity)
    save(entityType, entities)
    return newEntity
}



async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    save(entityType, entities)
    const entity = {
        updatedEntity,
        idx
    }
    return entity
}

async function remove(entityType, entityId) {
    const entities = await query(entityType);
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    save(entityType, entities)

}

// function getCmp(entityType, entityId, insideEntityId) {
//     return query(entityType)
//         .then(entities => entities.find(entity => entity._id === entityId))
//         .then(entity => entity.cmp.find(cmp.id === insideEntityId)
// }

// function removeCmp(wapId, cmpId) {
//     return storageService.removeCmp(STORAGE_KEY, wapId, cmpId)
// }
// function saveCmp(wapId, cmp) {
//     if (cmp._id) {
//         return storageService.putCmp(STORAGE_KEY, wapId, cmp)
//     } else {
//         return storageService.postCmp(STORAGE_KEY, wapId, cmp)


function save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}