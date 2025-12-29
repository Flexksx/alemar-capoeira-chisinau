<script lang="ts">
	import { Carousel, CarouselContent, CarouselItem } from '$lib/components/ui/carousel';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SongCard from '$lib/components/SongCard.svelte';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import songsData from '$lib/data/songs.json';
	import type { Song } from '$lib/types';
	import Menu from '@lucide/svelte/icons/menu';
	import Search from '@lucide/svelte/icons/search';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	const songs: Song[] = songsData as Song[];

	let sidebarOpen = $state(false);
	let searchOpen = $state(false);
	let carouselApi = $state<CarouselAPI>();
	let currentIndex = $state(0);
	let canScrollPrev = $state(false);
	let canScrollNext = $state(false);

	function setApi(api: CarouselAPI | undefined) {
		carouselApi = api;
		if (api) {
			api.on('select', () => {
				currentIndex = api.selectedScrollSnap();
				canScrollPrev = api.canScrollPrev();
				canScrollNext = api.canScrollNext();
			});
			// Initial state
			currentIndex = api.selectedScrollSnap();
			canScrollPrev = api.canScrollPrev();
			canScrollNext = api.canScrollNext();
		}
	}

	function selectSong(songId: string) {
		const index = songs.findIndex((s) => s.id === songId);
		if (index !== -1 && carouselApi) {
			carouselApi.scrollTo(index);
		}
	}

	function scrollPrev() {
		carouselApi?.scrollPrev();
	}

	function scrollNext() {
		carouselApi?.scrollNext();
	}

	const currentSong = $derived(songs[currentIndex]);
</script>

<!-- Header -->
<header class="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border safe-top">
	<div class="flex items-center justify-between px-2 py-2">
		<button
			onclick={() => (sidebarOpen = true)}
			class="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent"
			aria-label="Open menu"
		>
			<Menu class="h-6 w-6" />
		</button>

		<!-- Song indicator -->
		<div class="flex items-center gap-2">
			<button
				onclick={scrollPrev}
				disabled={!canScrollPrev}
				class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
				aria-label="Previous song"
			>
				<ChevronLeft class="h-5 w-5" />
			</button>
			<span class="min-w-[4rem] text-center text-sm font-medium text-muted-foreground">
				{currentIndex + 1} / {songs.length}
			</span>
			<button
				onclick={scrollNext}
				disabled={!canScrollNext}
				class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-30"
				aria-label="Next song"
			>
				<ChevronRight class="h-5 w-5" />
			</button>
		</div>

		<!-- Placeholder for symmetry -->
		<div class="w-11"></div>
	</div>
</header>

<!-- Main Content -->
<main class="h-dvh pt-[60px] pb-[80px] safe-top safe-bottom">
	<Carousel
		class="h-full"
		opts={{
			align: 'start',
			loop: false,
			dragFree: false
		}}
		{setApi}
	>
		<CarouselContent class="h-full -ml-0">
			{#each songs as song (song.id)}
				<CarouselItem class="h-full pl-0">
					<div class="h-full overflow-hidden">
						<SongCard {song} />
					</div>
				</CarouselItem>
			{/each}
		</CarouselContent>
	</Carousel>
</main>

<!-- Search FAB -->
<button
	onclick={() => (searchOpen = true)}
	class="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 safe-bottom"
	aria-label="Search songs"
>
	<Search class="h-6 w-6" />
</button>

<!-- Sidebar -->
<Sidebar
	{songs}
	isOpen={sidebarOpen}
	onClose={() => (sidebarOpen = false)}
	onSelectSong={selectSong}
	currentSongId={currentSong?.id}
/>

<!-- Search Modal -->
<SearchModal {songs} isOpen={searchOpen} onClose={() => (searchOpen = false)} onSelectSong={selectSong} />
