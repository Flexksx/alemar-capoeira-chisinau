<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Carousel, CarouselContent, CarouselItem } from '@alemar/ui/carousel';
	import type { CarouselAPI } from '@alemar/ui/carousel';
	import Sidebar from './Sidebar.svelte';
	import SongCard from './SongCard.svelte';
	import SearchModal from './SearchModal.svelte';
	import { songs, type Language } from '@alemar/songs';
	import Menu from '@lucide/svelte/icons/menu';
	import Search from '@lucide/svelte/icons/search';
	import FileDown from '@lucide/svelte/icons/file-down';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Button } from '@alemar/ui/button';
	import { Kbd } from '@alemar/ui/kbd';
	import { onMount } from 'svelte';

	let { data } = $props();

	// Set once on mount, so the carousel opens on the current song instead of scrolling to it.
	let carouselOpts = $state.raw<{ align: 'start'; startIndex: number }>();
	onMount(() => {
		carouselOpts = { align: 'start', startIndex: data.initialIndex };
	});

	let sidebarOpen = $state(false);
	let searchOpen = $state(false);
	let carouselApi = $state<CarouselAPI>();
	let selectedLanguage = $state<Language>('pt');

	const currentIndex = $derived(data.initialIndex);
	const currentSong = $derived(songs[currentIndex]);
	const canScrollPrev = $derived(currentIndex > 0);
	const canScrollNext = $derived(currentIndex < songs.length - 1);

	const setApi = (api: CarouselAPI | undefined) => {
		carouselApi = api;
		api?.on('select', () => {
			const snapId = songs[api.selectedScrollSnap()].id;
			if (snapId !== page.params.id) {
				void goto(`/songs/${snapId}`, {
					replaceState: true,
					noScroll: true,
					keepFocus: true
				});
			}
		});
	};

	const selectSong = (songId: string) => {
		void goto(`/songs/${songId}`);
	};

	const scrollPrev = () => {
		carouselApi?.scrollPrev();
	};

	const scrollNext = () => {
		carouselApi?.scrollNext();
	};

	const exportSongbookPdf = () => {
		void goto('/songs/export');
	};

	const isTyping = (target: EventTarget | null) =>
		target instanceof HTMLElement &&
		(target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

	const handleKeydown = (e: KeyboardEvent) => {
		if (searchOpen || isTyping(e.target)) return;
		if (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) {
			e.preventDefault();
			searchOpen = true;
		}
	};

	$effect(() => {
		if (!carouselApi) return;
		const distance = Math.abs(carouselApi.selectedScrollSnap() - currentIndex);
		if (distance > 0) {
			// Jump without animation when the target is not a neighbour.
			carouselApi.scrollTo(currentIndex, distance > 1);
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>
		{currentSong ? `${currentSong.title} — Alemar Capoeira` : 'Alemar Capoeira - Cântece'}
	</title>
	{#if currentSong}
		<meta
			name="description"
			content="Versurile cântecului de capoeira {currentSong.title} — colecție Alemar Capoeira Chisinau."
		/>
		<link rel="canonical" href="https://capoeira.md/songs/{currentSong.id}" />
	{/if}
</svelte:head>

<header
	class="fixed top-0 right-0 left-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md safe-top lg:left-72"
>
	<div class="flex h-14 items-center justify-between gap-2 px-2 lg:px-4">
		<div class="flex flex-1 items-center">
			<Button
				variant="ghost"
				size="icon"
				onclick={() => (sidebarOpen = true)}
				class="lg:hidden"
				aria-label="Deschide lista"
			>
				<Menu class="size-5" />
			</Button>
		</div>

		<div class="flex items-center gap-1">
			<Button
				variant="ghost"
				size="icon"
				onclick={scrollPrev}
				disabled={!canScrollPrev}
				aria-label="Cântecul anterior"
			>
				<ChevronLeft class="size-5" />
			</Button>
			<span
				class="min-w-[4.5rem] text-center font-impact text-lg tracking-[0.1em] text-foreground/80 tabular-nums"
			>
				{currentIndex + 1} / {songs.length}
			</span>
			<Button
				variant="ghost"
				size="icon"
				onclick={scrollNext}
				disabled={!canScrollNext}
				aria-label="Cântecul următor"
			>
				<ChevronRight class="size-5" />
			</Button>
		</div>

		<div class="flex flex-1 items-center justify-end gap-1">
			<Button
				variant="ghost"
				size="icon"
				onclick={() => (searchOpen = true)}
				class="sm:hidden"
				aria-label="Caută cântece"
			>
				<Search class="size-5" />
			</Button>
			<Button
				variant="outline"
				size="sm"
				onclick={() => (searchOpen = true)}
				class="hidden font-normal text-muted-foreground sm:inline-flex"
			>
				<Search />
				Caută
				<Kbd class="hidden lg:inline-flex">/</Kbd>
			</Button>
			<Button
				variant="ghost"
				size="icon"
				onclick={exportSongbookPdf}
				aria-label="Exportă cântecele în PDF"
			>
				<FileDown class="size-5" />
			</Button>
			<ThemeToggle />
		</div>
	</div>
</header>

<main class="h-dvh overflow-hidden pt-[calc(3.5rem+1px+env(safe-area-inset-top))] lg:pl-72">
	{#if carouselOpts}
		<Carousel class="h-full" opts={carouselOpts} {setApi}>
			<CarouselContent class="-ms-0 h-full">
				{#each songs as song (song.id)}
					<CarouselItem class="h-full ps-0">
						<SongCard {song} bind:selectedLanguage />
					</CarouselItem>
				{/each}
			</CarouselContent>
		</Carousel>
	{:else if currentSong}
		<div class="h-full">
			<SongCard song={currentSong} bind:selectedLanguage />
		</div>
	{/if}
</main>

<Sidebar
	{songs}
	isOpen={sidebarOpen}
	onClose={() => (sidebarOpen = false)}
	onSelectSong={selectSong}
	currentSongId={currentSong?.id}
/>

<SearchModal
	{songs}
	isOpen={searchOpen}
	onClose={() => (searchOpen = false)}
	onSelectSong={selectSong}
/>
