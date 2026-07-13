<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import DialogPortal from './dialog-portal.svelte';
	import type { Snippet } from 'svelte';
	import * as Dialog from './index.js';
	import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
	import type { ComponentProps } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import XIcon from '@lucide/svelte/icons/x';

	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		showCloseButton = true,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DialogPortal>>;
		children: Snippet;
		showCloseButton?: boolean;
	} = $props();
</script>

<DialogPortal {...portalProps}>
	<Dialog.Overlay />
	<DialogPrimitive.Content
		bind:ref
		data-slot="dialog-content"
		class={cn(
			'bg-popover text-popover-foreground not-motion-reduce:data-open:animate-in not-motion-reduce:data-closed:animate-out not-motion-reduce:data-closed:fade-out-0 not-motion-reduce:data-open:fade-in-0 not-motion-reduce:data-closed:zoom-out-95 not-motion-reduce:data-open:zoom-in-95 ring-foreground/5 dark:ring-foreground/10 grid gap-6 rounded-4xl p-6 text-sm shadow-xl ring-1 not-motion-reduce:duration-100 max-w-9/10 md:max-w-1/2 fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		{#if showCloseButton}
			<DialogPrimitive.Close data-slot="dialog-close">
				{#snippet child({ props })}
					<Button
						variant="ghost"
						class="bg-primary dark:hover:bg-primary/80 hover:bg-primary/80 absolute top-4 right-4 cursor-pointer motion-reduce:transition-none"
						size="icon-sm"
						{...props}
					>
						<XIcon color="#fff" />
						<span class="sr-only">Close</span>
					</Button>
				{/snippet}
			</DialogPrimitive.Close>
		{/if}
	</DialogPrimitive.Content>
</DialogPortal>
