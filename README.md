# what is this

A persistent store for svelte, based on svelte custom store with localforage (indexeddb,websql,localstorage)

# example

https://stroblp.github.io/svelte-persistent-store/

Svelte writable data is written into the choosen persisten store. In the example, counter value is restored after page reload.

# install

`npm i @stroblp/svelte-persistent-writable`

Usage..

```
<script>
	import persistentStore from "svelte-writable-persistent-store"
	let countIndexedDB = presistentStore(storeKey:"counter-value",initVal:0,            {
        driver : "INDEXEDDB",
        storeName : "default-store",
        dbName : "svelte-presistent-db" });
</script>

<button on:click={() => ($countIndexedDB -= 1)}>-</button>
<span>{$countIndexedDB}</span>
<button on:click={() => ($countIndexedDB += 1)}>+</button>
<button on:click={() => ($countIndexedDB =0)}>Clear</button>
```
## parameters

* storeKey - key value for the persistent db

* initVal - intial value to be stored in persistent db

## options

* driver - INDEXEDDB (default) | WEBSQL | LOCALSTORAGE

* storeName - store name: default value is set to "default-store"

* dbName - DB name: default value is set to "svelte-presistent-db"


        
if driver initialization process has failed store will return undefined    

