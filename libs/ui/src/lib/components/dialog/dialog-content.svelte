<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import XIcon from '@lucide/svelte/icons/x';
	import type { Snippet } from 'svelte';
	import { cn, type WithoutChildrenOrChild } from '../../utils.js';

	let {
		ref = $bindable(null),
		class: className,
		showCloseButton = true,
		closeLabel = 'Close',
		children,
		...restProps
	}: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
		children?: Snippet;
		showCloseButton?: boolean;
		closeLabel?: string;
	} = $props();
</script>

<DialogPrimitive.Portal>
	<DialogPrimitive.Overlay
		data-slot="dialog-overlay"
		class="fixed inset-0 z-50 bg-ink/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
	/>
	<DialogPrimitive.Content
		bind:ref
		data-slot="dialog-content"
		class={cn(
			'fixed top-[max(1rem,env(safe-area-inset-top))] left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 flex-col border border-foreground/20 bg-background text-foreground outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
		{#if showCloseButton}
			<DialogPrimitive.Close
				class="absolute top-2 right-2 inline-flex size-11 items-center justify-center hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-ring"
			>
				<XIcon class="size-5" />
				<span class="sr-only">{closeLabel}</span>
			</DialogPrimitive.Close>
		{/if}
	</DialogPrimitive.Content>
</DialogPrimitive.Portal>
