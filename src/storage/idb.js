import { openDB } from 'idb';
import defaults from '@/utils/defaults';

const storeName = import.meta.env.VITE_APP_NAME;
const objectStore = defaults.watchlistStorage;

export default openDB(storeName, 1, {
    upgrade(database) {
        database.createObjectStore(objectStore, { keyPath: 'id' });
    },
});
