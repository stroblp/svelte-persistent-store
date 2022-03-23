import { writable,  get } from "svelte/store";
import localforage from "localforage";

const presistentStore = ({
    storeKey,
    initVal,
    driver = "INDEXEDDB",
    storeName = "default-store",
    dbName = "svelte-presistent-db"}={}
) => {

    const store = writable(initVal);

    //create persistent store
    let db = localforage.createInstance({
        name: dbName,
        storeName,
        driver: localforage[driver]
    });

    //check if driver is OK
    db.ready().then(function () {
        readValueToStore();
    }).catch(function (e) {
        store.set(undefined);
    });

    let storeReady = false;

    //read value in persistent store
    function readValueToStore() {
        db.getItem(storeKey).then((value) => {
            if (value === null) {
                value = initVal;
            }
            storeReady = true;
            store.set(value);
        });
    }

    //return custom store
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

export default presistentStore