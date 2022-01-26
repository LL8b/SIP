<script>
	import {name} from './image_list';
	import { onMount } from 'svelte';
	//import entries from vanilla js using {Readable}
	import {entries} from './image_list';
	import {details} from './image_list';
	import {link} from './image_list';
	let count = entries.length
</script>

<main>
	<h1>{name}</h1>
	<p> <a href={link}>Link</a> <br>{details}</p>
	<p>Image Count: {count}</p>

	<div class="entries_ul" >
		{#each entries as entry}
		<figure>
			<img src={entry.image} alt={entry.title}>
			<figcaption>{entry.title} <p>Type: {entry.type}</p></figcaption>
			
		</figure>
		{:else}
			<p>fetching entries...</p>
		{/each}	
	</div>


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #4b4b4b;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>