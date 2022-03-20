# A Svelte template to use gitpod with vite

options:
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

https://stroblp.github.io/svelte-persistent-store/

counter value is restored after refresh