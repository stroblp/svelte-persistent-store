# what is this:

A persistent store for svelte, based on svelte custom store with localforage (indexeddb,websql,localstorage)

# example

https://stroblp.github.io/svelte-persistent-store/

Svelte writable data is written into the choosen persisten store. In the example, counter value is restored after page reload.

# install

To use simply copy persistent-store.js and install localforage:

    npm install localforage

## options

    storeKey:
        key value for the persistent db

    initVal:
        intial value to be stored in persistent db

    storeName: 
        store name: default value is set to "default-store"

    dbName: 
        DB name: default value is set to "svelte-presistent-db"

    driver:
        INDEXEDDB (default)
        WEBSQL
        LOCALSTORAGE
        -if driver initialization process has failed store will return undefined    

