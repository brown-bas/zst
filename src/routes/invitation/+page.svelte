<script lang="ts">
	import { onMount } from 'svelte';
	import Signature from '$lib/components/Signature.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { MediaQuery } from 'svelte/reactivity';
	import HeroBg from '$lib/assets/hero-bg.webp';
	import Closing from '$lib/assets/closing.webp';
	import Invitation from '$lib/assets/invitation.webp';
	import Program from '$lib/assets/program.webp';
	import { mode } from 'mode-watcher';
	import Menu from '$lib/components/invite/Menu.svelte';
	import events from '$lib/data/events';
	import infos from '$lib/data/infos';
	import { Button } from '$lib/components/ui/button';

	let moved = $state(new MediaQuery('(prefers-reduced-motion: reduce)').current);
	let settled = $state(new MediaQuery('(prefers-reduced-motion: reduce)').current);

	onMount(() => {
		window.scrollTo(0, 0);

		const moveTimer = window.setTimeout(() => {
			moved = true;
		}, 2500);

		const settleTimer = window.setTimeout(() => {
			settled = true;
		}, 2500 + 1500);

		return () => {
			window.clearTimeout(moveTimer);
			window.clearTimeout(settleTimer);
		};
	});

	$effect(() => {
		document.body.style.overflow = settled ? '' : 'hidden';
	});

	const isDesktop = new MediaQuery('(min-width: 768px)');

	const baseClass = $derived(
		`${moved ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 delay-1000`
	);
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroBg} fetchpriority="high" />
</svelte:head>

<main class="relative min-h-screen overflow-hidden flex flex-col items-center">
	<div
		class="w-full md:h-[calc(50vh-((100vw/3)*106/673)/2)] h-[calc(40vh-((100vw/3)*106/673)/2)] bg-sky-100 motion-reduce:bg-position-[center_35%] not-motion-reduce:bg-fixed md:bg-cover md:not-motion-reduce:bg-position-[bottom_center] bg-position-[top_center] bg-size-[175%] bg-no-repeat {baseClass}"
		style:background-image="url({HeroBg})"
	></div>
	<div
		class="{settled
			? 'absolute'
			: 'fixed'} left-1/2 z-20 w-5/6 md:w-1/3 transition-all duration-1500 ease-in-out"
		style:top={moved
			? isDesktop.current
				? 'calc(47.5vh - ((100vw/3)*106/673)/2 + 6rem)'
				: 'calc(35vh - ((100vw/3)*106/673)/2 + 6rem)'
			: '50%'}
		style:transform={moved ? 'translate(-50%, 0) scale(1)' : 'translate(-50%, -50%) scale(1.05)'}
	>
		<Signature />
	</div>
	<div class="md:pt-[20vh] pt-[15vh]">
		<h3 class="{baseClass} md:m-auto mt-8 text-2xl md:text-3xl">2026. augusztus 15.</h3>
	</div>
	<div class="{baseClass} w-9/10 md:w-1/2 flex flex-col py-12 md:py-24 gap-4">
		<p class="italic text-center">
			„Talán semmi sincs szebb a világon, mint találni egy embert, akinek lelkébe nyugodtan
			letehetjük szívünk titkait, akiben megbízunk, akinek kedves arca elűzi lelkünk bánatát, akinek
			egyszerű jelenléte elég, hogy vidámak és nagyon boldogok legyünk.”
		</p>
		<p class="text-sm text-center">— Hemingway —</p>
	</div>
	<div class="{baseClass} md:w-1/2 w-9/10 flex flex-col pt-16 gap-4">
		<h2 class="text-5xl text-center">Szeretettel meghívunk</h2>
		<p class="text-center">
			Örömmel osztjuk meg Veletek életünk egyik legszebb napját, amikor örökre összekötjük az
			életünket.
			<br />
			<br class="md:hidden" />
			Nagy boldogság lenne számunkra, ha ezen a különleges napon velünk ünnepelnétek.
		</p>
		<img
			src={Invitation}
			alt="Meghívás"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="mt-6 w-full md:w-4/5 rounded-md m-auto"
		/>
	</div>
	<div class="{baseClass} md:w-1/2 w-9/10 flex flex-col items-center pt-32 gap-4">
		<h2 class="text-5xl mb-4 text-center">Program</h2>
		<ul class="w-9/10 md:w-3/4">
			{#each events as event, i (event)}
				<li class="relative pl-6">
					<div
						class="absolute left-0 w-0.5 bg-primary"
						style="
								top: {i === 0 ? '1rem' : '0'};
								bottom: {i === events.length - 1 ? 'calc(100% - 1rem)' : '0'};
							"
					></div>
					<div class="absolute -left-0.75 top-4 h-2 w-2 rounded-full bg-foreground"></div>
					<div class="pb-8 pt-2.5">
						<p class="text-sm">{event.time}</p>
						<h3 class="font-sans text-foreground font-bold text-xl">{event.name}</h3>
						{#if event.description}
							<p>
								{event.description}
								{#if i === 4}
									-
									<Menu />
								{/if}
							</p>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
		<img
			src={Program}
			alt="Program"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="mt-6 w-full md:w-4/5 rounded-md m-auto"
		/>
	</div>
	<div
		class="{baseClass} flex flex-col justify-around items-center w-9/10 md:w-1/3 py-24 gap-12 md:gap-4"
	>
		<div class="flex flex-col items-center w-full h-auto">
			<h2 class="text-5xl text-center mb-8">Helyszín</h2>
			<h3 class="font-sans text-foreground w-full text-start">Wedding Lake (Soroksár, Budapest)</h3>
			<p class="text-sm text-muted-foreground w-full text-start">
				Budapest, Szentlőrinci út 195853, 1238
			</p>
			<p class="text-sm w-full text-start mt-4">
				<span class="material-symbols-rounded">directions_car</span>
				A helyszín autóval könnyen megközelíthető, parkolási lehetőség biztosított.
			</p>
		</div>
		<iframe
			loading="lazy"
			class="w-full aspect-square h-auto bg-white flex justify-center items-center rounded-xl {mode.current ===
			'dark'
				? 'brightness-75'
				: ''}"
			src="https://www.google.com/maps?q=Budapest,%20Szentlőrinci%20út%20195853,%201238%20MagyarországWedding%20Lake&output=embed&z=14"
			title="Maps"
		></iframe>
	</div>
	<div class="{baseClass} md:w-1/2 w-9/10">
		<h2 class="text-5xl text-center mb-8">Fontos tudnivalók</h2>
		<Accordion.Root type="single" class="border-0 w-full">
			{#each infos as info, i (info)}
				<Accordion.Item value="item-{i + 1}">
					<Accordion.Trigger>{info.title}</Accordion.Trigger>
					<Accordion.Content class="flex flex-col gap-4 text-balance">
						<p>
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html info.info}
						</p>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
	<div class="{baseClass} w-4/5 md:w-1/5 mt-24">
		<img
			src={Closing}
			alt="Zárás"
			loading="lazy"
			fetchpriority="low"
			sizes="(min-width: 768px) 50vw, 90vw"
			decoding="async"
			class="rounded-md"
		/>
		<h2 class="font-sans text-foreground text-center mt-8 mb-4 text-lg">
			Szeretettel várunk Benneteket!
		</h2>
		<div class="px-12">
			<Signature />
		</div>
	</div>
</main>
<footer
	class="invite h-max p-4 bg-primary mt-24 flex justify-center items-center text-background dark:text-foreground flex-col lg:flex-row lg:items-baseline"
>
	<p class="text-xs! lg:text-sm!">
		<span class="material-symbols-rounded text-lg! align-middle!">photo_camera</span> by <Button
			target="_blank"
			variant="link"
			class="p-0! text-foreground"
			href="https://subafoto.hu">SubaFoto</Button
		>
	</p>
	<p class="text-sm! mx-2 hidden lg:block">·</p>
	<p class="text-xs! lg:text-sm!">
		Made with <span class="material-symbols-rounded text-lg! align-middle!">favorite</span> by <Button
			target="_blank"
			variant="link"
			class="p-0! text-foreground"
			href="https://github.com/brown-bas">brown-bas</Button
		>
	</p>
</footer>
