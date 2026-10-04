<script lang="ts">
	import { useLanguageStore } from '$lib/i18n';
	import { Button } from '@alemar/ui/button';
	import { Dialog, DialogContent, DialogTitle } from '@alemar/ui/dialog';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	type LightboxItem = { type: 'photo'; src: string; alt: string } | { type: 'video'; src: string };

	let {
		items,
		startIndex,
		onclose
	}: {
		items: LightboxItem[];
		startIndex: number;
		onclose: () => void;
	} = $props();

	const lang = useLanguageStore();

	// svelte-ignore state_referenced_locally
	let current = $state(startIndex);
	const item = $derived(items[current]);

	const prev = () => {
		current = (current - 1 + items.length) % items.length;
	};

	const next = () => {
		current = (current + 1) % items.length;
	};

	// The dialog handles Escape, focus and scroll lock. The arrows move between items.
	const handleKey = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	};
</script>

<Dialog open onOpenChange={(open) => !open && onclose()}>
	<DialogContent
		closeLabel={lang.t.gallery.close}
		onkeydown={handleKey}
		class="dark top-0 left-0 h-dvh max-h-none w-full max-w-none translate-x-0 items-center justify-center border-0 bg-ink/95"
	>
		<DialogTitle class="absolute top-4 left-1/2 -translate-x-1/2 font-sans text-sm font-semibold">
			{current + 1} / {items.length}
		</DialogTitle>

		{#if items.length > 1}
			<Button
				variant="ghost"
				size="icon-lg"
				onclick={prev}
				class="absolute left-2 z-10 md:left-6"
				aria-label={lang.t.gallery.previous}
			>
				<ChevronLeft class="size-7" />
			</Button>
		{/if}

		<div class="relative max-h-[80dvh] max-w-[88vw] md:max-w-[80vw]">
			{#key current}
				{#if item.type === 'video'}
					<video
						src={item.src}
						autoplay
						muted
						loop
						playsinline
						controls
						class="lightbox-media max-h-[80dvh] max-w-full object-contain"
					></video>
				{:else}
					<img
						src={item.src}
						alt={item.alt}
						class="lightbox-media max-h-[80dvh] max-w-full object-contain"
					/>
				{/if}
			{/key}
		</div>

		{#if items.length > 1}
			<Button
				variant="ghost"
				size="icon-lg"
				onclick={next}
				class="absolute right-2 z-10 md:right-6"
				aria-label={lang.t.gallery.next}
			>
				<ChevronRight class="size-7" />
			</Button>

			<div class="absolute bottom-3 left-1/2 flex -translate-x-1/2">
				{#each items as _, i (i)}
					<button
						onclick={() => (current = i)}
						class="flex h-11 items-center px-1"
						aria-label="{lang.t.gallery.item} {i + 1}"
						aria-current={i === current}
					>
						<span
							class="block h-1.5 transition-all duration-300 {i === current
								? 'w-6 bg-foreground'
								: 'w-1.5 bg-foreground/30'}"
						></span>
					</button>
				{/each}
			</div>
		{/if}
	</DialogContent>
</Dialog>

<style>
	@keyframes lightbox-in {
		from {
			opacity: 0;
			scale: 0.96;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	}

	.lightbox-media {
		animation: lightbox-in 0.25s ease-out both;
	}
</style>
