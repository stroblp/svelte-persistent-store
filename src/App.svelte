<script>
	import { writableIndexedDB } from './presistent-store';
	let count = writableIndexedDB('counter-value',0);
</script>

<button on:click={() => $count -= 1}>-</button>
<span>{ $count }</span>
<button on:click={() => $count += 1}>+</button>