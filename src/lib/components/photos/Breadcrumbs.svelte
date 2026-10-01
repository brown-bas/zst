<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { folderHref } from '$lib/manifest';

	let { segments }: { segments: string[] } = $props();
</script>

<Breadcrumb.Root class="max-w-full min-w-0">
	<Breadcrumb.List class="flex-nowrap text-lg font-semibold sm:text-xl">
		<Breadcrumb.Item class="shrink-0">
			{#if segments.length === 0}
				<Breadcrumb.Page>Fotók</Breadcrumb.Page>
			{:else}
				<Breadcrumb.Link href={folderHref([])}>Fotók</Breadcrumb.Link>
			{/if}
		</Breadcrumb.Item>
		{#each segments as name, i (i)}
			<Breadcrumb.Separator class="shrink-0" />
			<Breadcrumb.Item class="min-w-0">
				{#if i === segments.length - 1}
					<Breadcrumb.Page class="truncate" title={name}>{name}</Breadcrumb.Page>
				{:else}
					<Breadcrumb.Link
						class="truncate"
						title={name}
						href={folderHref(segments.slice(0, i + 1))}
					>
						{name}
					</Breadcrumb.Link>
				{/if}
			</Breadcrumb.Item>
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
