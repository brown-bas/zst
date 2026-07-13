<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Zsuzsi és Tamás esküvője</title>
	<link rel="icon" href={favicon} />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		media="print"
		onload={(e) => ((e.currentTarget as HTMLLinkElement).media = 'all')}
	/>
	<noscript>
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
	</noscript>
</svelte:head>
<ModeWatcher />
<div class="w-screen min-h-screen h-max">
	{@render children()}
</div>
