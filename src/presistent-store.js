import { writable, get } from "svelte/store";
import localforage from "localforage";

export const writableIndexedDB = (
    storeKey,
    initVal,
    storeName = "default-store",
    dbName = "svelte-presistent-db",
    driver = "INDEXEDDB"
) => {
    const db = localforage.createInstance({
        name: dbName,
        storeName,
        driver:localforage[driver]
    });

    const store = writable(initVal);
    let storeReady = false;

    function readValueToStore() {
        db.getItem(storeKey).then((value) => {
            if (value === null) {
                value = initVal;
            }
            storeReady = true;
            store.set(value);
        });
    }

    readValueToStore();

    return {
        subscribe: store.subscribe,
        update: (value) => {
            store.update(value);

            if (storeReady) {
                db.setItem(storeKey, get(store));
            }
        },
        set: (value) => {
            store.set(value);
            if (storeReady) {
                db.setItem(storeKey, value);
            }
        },
    };
};