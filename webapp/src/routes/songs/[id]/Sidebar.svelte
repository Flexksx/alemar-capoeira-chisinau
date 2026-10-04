<script lang="ts">
	import { CATEGORIES, CATEGORY_LABELS, type Song } from '@alemar/songs';
	import { Button } from '@alemar/ui/button';
	import X from '@lucide/svelte/icons/x';
	import ArrowUpLeft from '@lucide/svelte/icons/arrow-up-left';
	import { MediaQuery } from 'svelte/reactivity';
	import { CATEGORY_FILL, songNumber } from './category';

	interface Props {
		songs: Song[];
		isOpen: boolean;
		onClose: () => void;
		onSelectSong: (songId: string) => void;
		currentSongId?: string;
	}

	let { songs, isOpen, onClose, onSelectSong, currentSongId }: Props = $props();

	// Below the lg breakpoint the list is a drawer. The fallback keeps the prerendered page usable.
	const desktop = new MediaQuery('min-width: 1024px', true);
	const isDrawer = $derived(!desktop.current);

	let closeButton = $state<HTMLElement | null>(null);

	$effect(() => {
		if (isOpen && isDrawer) closeButton?.focus();
	});

	// Keep the catalogue order, so the numbers match the counter in the page header.
	const sections = $derived(
		CATEGORIES.map((category) => ({
			category,
			entries: songs
				.map((song, index) => ({ song, index }))
				.filter(({ song }) => song.category === category)
		})).filter((section) => section.entries.length > 0)
	);

	const handleSongClick = (songId: string) => {
		onSelectSong(songId);
		onClose();
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<button
		class="fixed inset-0 z-40 bg-ink/70 lg:hidden"
		onclick={onClose}
		aria-label="Închide lista"
		tabindex="-1"
	></button>
{/if}

<aside
	inert={isDrawer && !isOpen}
	role={isDrawer ? 'dialog' : undefined}
	aria-modal={isDrawer && isOpen ? true : undefined}
	aria-label="Lista cântecelor"
	class="fixed top-0 left-0 z-50 flex h-full w-[85vw] max-w-80 flex-col border-r border-border bg-background transition-transform duration-300 ease-out lg:z-30 lg:w-80 lg:translate-x-0 {isOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	<header class="border-b border-border safe-top">
		<div class="flex h-14 items-center justify-between gap-2 pr-2 pl-4">
			<div class="flex items-baseline gap-3">
				<span class="font-display text-3xl leading-none uppercase">Cântece</span>
				<span class="text-label text-muted-foreground">{songs.length}</span>
			</div>
			<a
				href="/"
				class="flex items-center gap-1 text-label text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowUpLeft class="size-3.5" />
				Alemar
			</a>
			<Button
				bind:ref={closeButton}
				variant="ghost"
				size="icon"
				onclick={onClose}
				class="lg:hidden"
				aria-label="Închide lista"
			>
				<X class="size-5" />
			</Button>
		</div>
	</header>

	<nav
		class="flex-1 overflow-y-auto overscroll-contain pb-6 safe-bottom"
		aria-label="Lista cântecelor"
	>
		{#each sections as { category, entries } (category)}
			<section>
				<h2
					class="sticky top-0 z-10 flex items-center justify-between bg-background px-4 pt-5 pb-2 text-label"
				>
					<span class="flex items-center gap-2">
						<span class="size-3 {CATEGORY_FILL[category]}"></span>
						{CATEGORY_LABELS[category]}
					</span>
					<span class="text-muted-foreground">{entries.length}</span>
				</h2>
				<ol>
					{#each entries as { song, index } (song.id)}
						{@const active = currentSongId === song.id}
						<li>
							<a
								href="/songs/{song.id}"
								aria-current={active ? 'page' : undefined}
								onclick={(e) => {
									e.preventDefault();
									handleSongClick(song.id);
								}}
								class="flex items-baseline gap-3 px-4 py-2.5 transition-colors {active
									? 'bg-primary text-primary-foreground'
									: 'hover:bg-foreground/5'}"
							>
								<span
									class="w-5 shrink-0 font-display text-sm tabular-nums {active
										? ''
										: 'text-muted-foreground'}"
								>
									{songNumber(index)}
								</span>
								<span class="text-[15px] leading-snug {active ? 'font-semibold' : 'font-medium'}">
									{song.title}
								</span>
							</a>
						</li>
					{/each}
				</ol>
			</section>
		{/each}
	</nav>
</aside>
