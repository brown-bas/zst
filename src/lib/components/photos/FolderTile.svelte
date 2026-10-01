<script lang="ts">
	import FolderIcon from '@lucide/svelte/icons/folder';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { ResolvedPathname } from '$app/types';

	let { name, count, href }: { name: string; count: number; href: ResolvedPathname } = $props();
</script>

<a
	{href}
	class="group block rounded-4xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
>
	<Card.Root
		size="sm"
		class="aspect-square items-center justify-center gap-2 px-2 text-center transition-colors group-hover:bg-accent"
	>
		<FolderIcon
			class="size-1/3 fill-muted text-muted-foreground"
			strokeWidth={1.5}
			aria-hidden="true"
		/>
		<span class="font-semibold wrap-anywhere text-xs">{name}</span>
		<Badge variant="secondary">{count} kép</Badge>
	</Card.Root>
</a>
