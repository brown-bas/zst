<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { imgUrl, type ImageEntry } from '$lib/manifest';

	let { image, onclick }: { image: ImageEntry; onclick: () => void } = $props();

	let img = $state<HTMLImageElement>();
	let loaded = $state(false);

	$effect(() => {
		if (img?.complete && img.naturalWidth > 0) loaded = true;
	});
</script>

<button
	class="group relative block w-full cursor-pointer overflow-hidden rounded-2xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
	{onclick}
	aria-label="{image.name} megnyitása"
>
	<AspectRatio ratio={1}>
		{#if !loaded}
			<Skeleton class="absolute inset-0 rounded-none" />
		{/if}
		<img
			bind:this={img}
			src={imgUrl(image.thumb)}
			alt={image.name}
			width={image.width}
			height={image.height}
			loading="lazy"
			decoding="async"
			onload={() => (loaded = true)}
			class="size-full object-cover transition duration-200 group-hover:scale-105 {loaded ? 'opacity-100' : 'opacity-0'}"
		/>
		<span
			class="absolute inset-x-0 bottom-0 truncate bg-linear-to-t from-black/70 to-transparent px-2 pt-5 pb-1.5 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
		>
			{image.name}
		</span>
	</AspectRatio>
</button>
