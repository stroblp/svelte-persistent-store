import { writable, get } from "svelte/store";
import localforage from "localforage";

export const writableIndexedDB = (
    key,
    initial,
    storeName = "default-store",
    dbName = "svelte-presistent-db"
) => {
    const db = localforage.createInstance({
        name: dbName,
        storeName,
    });

    const store = writable(initial);
    let storeReady = false;

    function readValueToStore() {
        db.getItem(key).then((value) => {
            if (value === null) {
                value = initial;
                // db.setItem(key, value)
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
                db.setItem(key, get(store));
            }
        },
        set: (value) => {
            store.set(value);
            if (storeReady) {
                db.setItem(key, value);
            }
        },
    };
};