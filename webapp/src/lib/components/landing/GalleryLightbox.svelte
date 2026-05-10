<script lang="ts">
	import { X, ChevronLeft, ChevronRight } from '@lucide/svelte';

	type LightboxItem =
		| { type: 'photo'; src: string; alt: string }
		| { type: 'video'; src: string };

	let {
		items,
		startIndex,
		onclose
	}: {
		items: LightboxItem[];
		startIndex: number;
		onclose: () => void;
	} = $props();

	let current = $state(startIndex);

	function prev() {
		current = (current - 1 + items.length) % items.length;
	}

	function next() {
		current = (current + 1) % items.length;
	}

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape') onclose();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}

	$effect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:window onkeydown={handleKey} />

<!-- Backdrop -->
<div
	class="fixed inset-0 z-[100] flex items-center justify-center"
	style="background: rgba(8,5,2,0.95)"
	role="dialog"
	aria-modal="true"
>
	<!-- Close -->
	<button
		onclick={onclose}
		class="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center text-foreground/60 transition-colors hover:text-primary cursor-pointer"
		aria-label="Close"
	>
		<X size={22} />
	</button>

	<!-- Counter -->
	<p class="absolute top-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] uppercase text-foreground/40">
		{current + 1} / {items.length}
	</p>

	<!-- Prev -->
	{#if items.length > 1}
		<button
			onclick={prev}
			class="absolute left-4 md:left-8 z-10 flex h-12 w-12 items-center justify-center text-foreground/50 transition-colors hover:text-primary cursor-pointer"
			aria-label="Previous"
		>
			<ChevronLeft size={32} />
		</button>
	{/if}

	<!-- Media -->
	<div class="relative max-h-[85dvh] max-w-[90vw] md:max-w-[80vw]">
		{#key current}
			{#if items[current].type === 'video'}
				<video
					src={items[current].src}
					autoplay
					muted
					loop
					playsinline
					controls
					class="lightbox-media max-h-[85dvh] max-w-full rounded-sm object-contain"
				></video>
			{:else}
				<img
					src={items[current].src}
					alt={(items[current] as { type: 'photo'; src: string; alt: string }).alt}
					class="lightbox-media max-h-[85dvh] max-w-full rounded-sm object-contain"
				/>
			{/if}
		{/key}
	</div>

	<!-- Next -->
	{#if items.length > 1}
		<button
			onclick={next}
			class="absolute right-4 md:right-8 z-10 flex h-12 w-12 items-center justify-center text-foreground/50 transition-colors hover:text-primary cursor-pointer"
			aria-label="Next"
		>
			<ChevronRight size={32} />
		</button>
	{/if}

	<!-- Dot indicators -->
	{#if items.length > 1}
		<div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
			{#each items as _, i (i)}
				<button
					onclick={() => (current = i)}
					class="h-1.5 rounded-full transition-all duration-300 cursor-pointer {i === current ? 'w-6 bg-primary' : 'w-1.5 bg-foreground/20'}"
					aria-label="Go to item {i + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	@keyframes lightbox-in {
		from { opacity: 0; scale: 0.96; }
		to { opacity: 1; scale: 1; }
	}

	.lightbox-media {
		animation: lightbox-in 0.25s ease-out both;
	}
</style>
