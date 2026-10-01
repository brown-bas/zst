<script lang="ts">
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { Button } from '$lib/components/ui/button';
	import { ButtonGroup, ButtonGroupSeparator } from '$lib/components/ui/button-group';
	import { cn } from '$lib/utils';

	let { class: className, size = 'default' }: { class?: string; size?: 'default' | 'lg' } =
		$props();
	const buttonClass = $derived(
		cn(
			'hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]',
			size === 'lg' && 'size-11'
		)
	);
	const iconClass = $derived(size === 'lg' ? 'size-5' : undefined);

	let canGoBack = $state(false);
	let canGoForward = $state(false);

	$effect(() => {
		if (!('navigation' in window)) {
			canGoBack = canGoForward = true;
			return;
		}
		// Only count adjacent entries inside /photos, so e.g. arriving from / doesn't enable "back"
		const isPhotosEntry = (entry: NavigationHistoryEntry | undefined) => {
			if (!entry?.url) return false;
			const { pathname } = new URL(entry.url);
			return pathname === '/photos' || pathname.startsWith('/photos/');
		};
		const update = () => {
			const entries = navigation.entries();
			const index = navigation.currentEntry?.index ?? -1;
			canGoBack = index > 0 && isPhotosEntry(entries[index - 1]);
			canGoForward = index >= 0 && isPhotosEntry(entries[index + 1]);
		};
		update();
		navigation.addEventListener('currententrychange', update);
		return () => navigation.removeEventListener('currententrychange', update);
	});
</script>

<ButtonGroup class={cn('rounded-4xl bg-secondary', className)}>
	<Button
		variant="secondary"
		size="icon"
		aria-label="Vissza"
		title="Vissza"
		class={buttonClass}
		disabled={!canGoBack}
		onclick={() => history.back()}
	>
		<ArrowLeftIcon class={iconClass} />
	</Button>
	<ButtonGroupSeparator />
	<Button
		variant="secondary"
		size="icon"
		aria-label="Előre"
		title="Előre"
		class={buttonClass}
		disabled={!canGoForward}
		onclick={() => history.forward()}
	>
		<ArrowRightIcon class={iconClass} />
	</Button>
</ButtonGroup>
