<script lang="ts">
	import FolderOpenIcon from '@lucide/svelte/icons/folder-open';
	import * as Empty from '$lib/components/ui/empty';
	import Breadcrumbs from '$lib/components/photos/Breadcrumbs.svelte';
	import FolderTile from '$lib/components/photos/FolderTile.svelte';
	import ImageTile from '$lib/components/photos/ImageTile.svelte';
	import Lightbox from '$lib/components/photos/Lightbox.svelte';
	import NavButtons from '$lib/components/photos/NavButtons.svelte';
	import { folderHref } from '$lib/manifest';
	import { Button } from '$lib/components/ui/button';

	let { data } = $props();
	let lightbox = $state<Lightbox>();
</script>

<svelte:head>
	<title>{data.segments.at(-1) ?? 'Fotók'}</title>
</svelte:head>

<header
	class="w-full flex items-baseline lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-4 p-4 lg:px-[calc(max(0px,(100%-87.5rem)/2)+1rem)] gap-2 fixed z-10 bg-background top-0 lg:pt-14 left-0 *:transition-opacity *:duration-300 {lightbox?.isOpen
		? 'max-lg:*:opacity-0'
		: ''}"
>
	<NavButtons class="hidden lg:flex lg:col-start-2 lg:row-span-2 lg:row-start-1" />
	<Breadcrumbs segments={data.segments} />
	<p class="shrink-0 text-sm whitespace-nowrap text-muted-foreground">
		{data.folders.length} mappa · {data.images.length} kép
	</p>
</header>

<div class="lg:mt-32 mt-12 flex-1 mb-24">
	{#if data.folders.length === 0 && data.images.length === 0}
		<Empty.Root class="border">
			<Empty.Header>
				<Empty.Media variant="icon"><FolderOpenIcon /></Empty.Media>
				<Empty.Title>Ez a mappa üres</Empty.Title>
			</Empty.Header>
		</Empty.Root>
	{/if}

	<ul class="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
		{#each data.folders as folder (folder.name)}
			<li>
				<FolderTile
					name={folder.name}
					count={folder.count}
					href={folderHref([...data.segments, folder.name])}
				/>
			</li>
		{/each}

		{#each data.images as image, i (image.original)}
			<li>
				<ImageTile {image} onclick={() => lightbox?.open(i)} />
			</li>
		{/each}
	</ul>
</div>

<NavButtons
	size="lg"
	class="sticky bottom-4 z-10 mb-2 self-center shadow-lg transition-opacity duration-300 lg:hidden {lightbox?.isOpen
		? 'opacity-0'
		: ''}"
/>

{#key data.segments.join('/')}
	<Lightbox bind:this={lightbox} images={data.images} />
{/key}

<footer class="h-max p-2 flex flex-col lg:flex-row justify-center items-center lg:items-baseline">
	<p class="text-xs! lg:text-sm!">
		<span class="material-symbols-rounded text-lg! align-middle!">photo_camera</span> by <Button
			target="_blank"
			variant="link"
			class="p-0!"
			href="https://subafoto.hu">SubaFoto</Button
		> & <Button target="_blank" variant="link" class="p-0!" href="https://fotobox.hu"
			>fotoBox</Button
		>
	</p>
	<p class="text-sm! mx-2 hidden lg:block">·</p>
	<p class="text-xs! lg:text-sm!">
		Made with <span class="material-symbols-rounded text-lg! align-middle!">favorite</span> by <Button
			target="_blank"
			variant="link"
			class="p-0!"
			href="https://github.com/brown-bas">brown-bas</Button
		>
	</p>
</footer>
