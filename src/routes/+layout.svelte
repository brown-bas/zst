<script lang="ts">
	import './layout.css';
	import { ModeWatcher } from 'mode-watcher';
	import cover from '$lib/assets/og-image.jpg';
	import favicon from '$lib/assets/favicon.svg';
	import favicon32 from '$lib/assets/favicon.png';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';

	let { children } = $props();

	const description =
		'Zsuzsi és Tamás 2026. augusztus 15-én kötik össze életüket a Wedding Lake-en, Budapesten. Szeretettel várják vendégeiket!';
</script>

<svelte:head>
	<title>Zsuzsi és Tamás esküvője</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://zsuzsi-es-tamas-eskuvoje.com/" />
	<meta name="theme-color" content="#A37D1F" />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="hu_HU" />
	<meta property="og:title" content="Zsuzsi és Tamás esküvője" />
	<meta property="og:site_name" content="Zsuzsi és Tamás esküvője" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://zsuzsi-es-tamas-eskuvoje.com/" />
	<meta property="og:image" content={cover} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Zsuzsi és Tamás esküvője - 2026. augusztus 15." />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Zsuzsi és Tamás esküvője" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={cover} />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Event",
			"name": "Zsuzsi és Tamás esküvője",
			"description": "Zsuzsi és Tamás 2026. augusztus 15-én kötik össze életüket a Wedding Lake-en, Budapesten. Szeretettel várják vendégeiket!",
			"startDate": "2026-08-15",
			"eventStatus": "https://schema.org/EventScheduled",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"location": {
				"@type": "Place",
				"name": "Wedding Lake",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Budapest",
					"addressCountry": "HU"
				}
			},
			"url": "https://zsuzsi-es-tamas-eskuvoje.com/",
			"image": cover,
			"organizer": [
				{ "@type": "Person", "name": "Zsuzsi" },
				{ "@type": "Person", "name": "Tamás" }
			]
		}
	</script>
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
