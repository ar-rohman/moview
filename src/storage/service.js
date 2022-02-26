import idbObject from './idb';

export default {
    async getById(objectStore, id) {
        if (!id) return;
        return (await idbObject).get(objectStore, id);
    },
    async getAll(objectStore) {
        return (await idbObject).getAll(objectStore);
    },
    async put(objectStore, data) {
        if (!data.hasOwnProperty.call(data, 'id')) return;
        return (await idbObject).put(objectStore, data);
    },
    async delete(objectStore, id) {
        if (!id) return;
        return (await idbObject).delete(objectStore, id);
    },
};
