<script lang="ts">
	import { page } from '$app/state';
	import FolderXIcon from '@lucide/svelte/icons/folder-x';
	import TriangleAlertIcon from '@lucide/svelte/icons/triangle-alert';
	import { Button } from '$lib/components/ui/button';
	import * as Empty from '$lib/components/ui/empty';
	import { folderHref } from '$lib/manifest';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>Hiba</title>
</svelte:head>

<Empty.Root>
	<Empty.Header>
		<Empty.Media variant="icon">
			{#if notFound}
				<FolderXIcon />
			{:else}
				<TriangleAlertIcon />
			{/if}
		</Empty.Media>
		<Empty.Title>{notFound ? 'A mappa nem található' : 'Valami hiba történt'}</Empty.Title>
		<Empty.Description>
			{#if notFound}
				Lehet, hogy elírtad a címet, vagy ez a mappa nem létezik.
			{:else}
				Nem sikerült betölteni a fotókat (hibakód: {page.status}). Próbáld újra később.
			{/if}
		</Empty.Description>
	</Empty.Header>
	<Empty.Content>
		<Button href={folderHref([])}>Vissza a fotókhoz</Button>
	</Empty.Content>
</Empty.Root>
