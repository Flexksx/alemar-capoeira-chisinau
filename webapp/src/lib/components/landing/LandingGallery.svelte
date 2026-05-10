<script lang="ts">
	import { useLanguageStore } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { lazyVideo } from '$lib/actions/lazyVideo';
	import GalleryLightbox from './GalleryLightbox.svelte';
	import bichoMicho from '$lib/assets/photos/bicho_micho.jpg';
	import serginho from '$lib/assets/photos/serginho.jpg';
	import ticoTicoMimi from '$lib/assets/photos/tico_tico_mimi.jpg';
	import bichoBibi from '$lib/assets/photos/bicho_bibi.jpg';
	import groupPhoto from '$lib/assets/photos/20250815_195516.jpg';
	import bucharest from '$lib/assets/photos/bucuresti_group_photo.jpg';
	import tiraspol from '$lib/assets/photos/tiraspol.jpg';
	import verandamall from '$lib/assets/photos/verandamall.jpg';
	import bucharest2 from '$lib/assets/photos/bucuresti_group_photo2.jpg';
	import video1 from '$lib/assets/videos/558934128_24493304180342324_2883331840718687193_n.mp4';
	import video2 from '$lib/assets/videos/559186123_31809521748693885_2546781122121030783_n.mp4';

	const lang = useLanguageStore();

	type GalleryItem =
		| { type: 'photo'; src: string; alt: string; wide: boolean }
		| { type: 'video'; src: string; wide: boolean };

	// Videos first, then photos. grid-flow-dense fills gaps caused by wide items.
	const items: GalleryItem[] = [
		{ type: 'video', src: video1, wide: false },
		{ type: 'video', src: video2, wide: false },
		{ type: 'photo', src: bichoMicho, alt: 'Jogo de Capoeira — demonstrație publică', wide: true },
		{ type: 'photo', src: serginho, alt: 'Sergiu Melnic la berimbau', wide: false },
		{ type: 'photo', src: ticoTicoMimi, alt: 'Roda de Capoeira', wide: true },
		{ type: 'photo', src: bichoBibi, alt: 'Jogo — roda în aer liber', wide: false },
		{ type: 'photo', src: groupPhoto, alt: 'Alemar Capoeira Chișinău — antrenament', wide: true },
		{ type: 'photo', src: bucharest, alt: 'Echipa la București', wide: false },
		{ type: 'photo', src: tiraspol, alt: 'Echipa la Tiraspol cu steagul Braziliei', wide: false },
		{ type: 'photo', src: verandamall, alt: 'Batizado — Veranda Mall', wide: false },
		{ type: 'photo', src: bucharest2, alt: 'Echipa la București — Meli Melo', wide: false }
	];

	// Flat list for lightbox (all items)
	const lightboxItems = items.map((item) =>
		item.type === 'video'
			? { type: 'video' as const, src: item.src }
			: { type: 'photo' as const, src: item.src, alt: item.alt }
	);

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}
</script>

<section class="py-24 md:py-36" id="gallery">
	<div class="mx-auto max-w-6xl px-6 md:px-10">
		<h2
			class="mb-12 font-impact text-[clamp(2.5rem,7vw,5rem)] leading-none tracking-[0.04em] text-foreground/20"
			use:reveal
		>
			{lang.t.gallery.title}
		</h2>

		<div class="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 [grid-auto-flow:dense]">
			{#each items as item, i (item.src)}
				<button
					class="group relative overflow-hidden bg-card text-left cursor-zoom-in {item.wide ? 'col-span-2' : ''}"
					style="aspect-ratio: {item.wide ? '16/7' : '4/5'}"
					onclick={() => openLightbox(i)}
					use:reveal={{ delay: (i % 3) * 80 }}
					aria-label="Open media {i + 1}"
				>
					{#if item.type === 'video'}
						<video
							use:lazyVideo={{ src: item.src }}
							autoplay
							muted
							loop
							playsinline
							class="h-full w-full object-cover object-center pointer-events-none"
						></video>
					{:else}
						<img
							src={item.src}
							alt={item.alt}
							loading="lazy"
							class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
						/>
					{/if}
					<!-- Gold hover overlay -->
					<div
						class="absolute inset-0 border border-primary/0 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-black/10"
					></div>
				</button>
			{/each}
		</div>
	</div>
</section>

{#if lightboxOpen}
	<GalleryLightbox
		items={lightboxItems}
		startIndex={lightboxIndex}
		onclose={() => (lightboxOpen = false)}
	/>
{/if}
