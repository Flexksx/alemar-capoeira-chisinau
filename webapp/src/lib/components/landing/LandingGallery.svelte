<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';

	const lang = useLanguageStore();

	const photos = [
		{ src: groupPhoto, alt: 'Alemar Capoeira Chișinău', wide: true },
		{ src: '/photos/action.jpg', alt: 'Capoeira move', wide: false },
		{ src: '/photos/jogo.jpg', alt: 'Jogo de Capoeira', wide: false },
		{ src: groupPhoto, alt: 'Group training', wide: false },
		{ src: '/photos/event.jpg', alt: 'Capoeira event', wide: true }
	];
</script>

<section class="py-24 md:py-36" id="gallery">
	<div class="mx-auto max-w-6xl px-6 md:px-10">
		<h2
			class="mb-12 font-impact text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[0.04em] text-foreground/20"
		>
			{lang.t.gallery.title}
		</h2>

		<div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
			{#each photos as photo, i}
				<div
					class="group relative overflow-hidden bg-card {photo.wide && i === 0
						? 'col-span-2 row-span-1'
						: ''} {photo.wide && i === 4 ? 'col-span-2' : ''}"
					style="aspect-ratio: {photo.wide ? '16/7' : '4/5'}"
				>
					<img
						src={photo.src}
						alt={photo.alt}
						class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
						onerror={(e) => {
							const img = e.currentTarget as HTMLImageElement;
							img.style.display = 'none';
							const placeholder = img.parentElement?.querySelector('.placeholder') as HTMLElement | null;
							if (placeholder) placeholder.style.display = 'flex';
						}}
					/>
					<div
						class="placeholder absolute inset-0 hidden items-center justify-center bg-card border border-border/20"
					>
						<span class="font-impact text-4xl text-border/30 tracking-widest">ALEMAR</span>
					</div>
					<!-- Gold hover overlay -->
					<div
						class="absolute inset-0 border border-primary/0 transition-all duration-300 group-hover:border-primary/30"
					></div>
				</div>
			{/each}
		</div>
	</div>
</section>
