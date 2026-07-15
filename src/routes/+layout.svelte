<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

	const description =
		'Zsuzsi és Tamás 2026. augusztus 15-én kötik össze életüket a Wedding Lake-en, Budapesten. Szeretettel várják vendégeiket!';
</script>

<svelte:head>
	<title>Zsuzsi és Tamás esküvője</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="og:title" content="Zsuzsi és Tamás esküvője" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content="{page.url.origin}/og-image.webp" />
	<meta property="og:image:width" content="3648" />
	<meta property="og:image:height" content="5472" />
	<meta property="og:image:alt" content="Zsuzsi és Tamás esküvője - 2026. augusztus 15." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Zsuzsi és Tamás esküvője" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{page.url.origin}/og-image.webp" />
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
<div class="w-full min-h-screen">
	{@render children()}
</div>
