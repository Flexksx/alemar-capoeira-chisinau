<script lang="ts">
	import { createSongSearch } from '$lib/search';
	import type { Song } from '$lib/types';
	import { sortSongsByCategory } from '$lib/utils';
	import CategoryBadge from './CategoryBadge.svelte';
	import X from '@lucide/svelte/icons/x';
	import Search from '@lucide/svelte/icons/search';
	import Music from '@lucide/svelte/icons/music';

	interface Props {
		songs: Song[];
		isOpen: boolean;
		onClose: () => void;
		onSelectSong: (songId: string) => void;
	}

	let { songs: unsortedSongs, isOpen, onClose, onSelectSong }: Props = $props();
	const songs = $derived(sortSongsByCategory(unsortedSongs));

	let query = $state('');
	let inputRef = $state<HTMLInputElement | null>(null);

	const searcher = $derived(createSongSearch(songs));
	const results = $derived(query.trim() ? searcher.search(query) : []);

	$effect(() => {
		if (isOpen && inputRef) {
			setTimeout(() => inputRef?.focus(), 100);
		}
	});

	function handleClose() {
		query = '';
		onClose();
	}

	function handleSelect(songId: string) {
		onSelectSong(songId);
		handleClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
		onclick={handleClose}
		aria-label="Close search"
		tabindex="-1"
	></button>

	<!-- Modal -->
	<div class="fixed inset-x-4 top-4 z-50 mx-auto max-w-lg safe-top">
		<div class="overflow-hidden bg-card shadow-2xl border border-border/40">
			<!-- Search Header -->
			<div class="flex items-center gap-2 border-b border-border/40 p-3">
				<Search class="h-4 w-4 shrink-0 text-primary" />
				<input
					bind:this={inputRef}
					bind:value={query}
					type="text"
					placeholder="Caută cântece..."
					class="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
				/>
				<button
					onclick={handleClose}
					class="btn-icon h-8 w-8"
					aria-label="Close"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Results -->
			<div class="max-h-[60vh] overflow-y-auto overscroll-contain">
				{#if query.trim() && results.length === 0}
					<div class="flex flex-col items-center justify-center py-12 text-muted-foreground">
						<Music class="mb-2 h-8 w-8 opacity-30" />
						<p class="text-sm tracking-wide">Niciun rezultat pentru "{query}"</p>
					</div>
				{:else if results.length > 0}
					<ul class="divide-y divide-border/30">
						{#each results as result (result.song.id)}
							<li>
								<button
									onclick={() => handleSelect(result.song.id)}
									class="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-muted/50"
								>
									<div class="flex-1 min-w-0">
										<div class="flex items-center gap-2">
											<span class="truncate font-medium text-foreground">
												{result.song.title}
											</span>
											<CategoryBadge category={result.song.category} size="sm" />
										</div>
										{#if result.song.author}
											<p class="mt-0.5 truncate text-xs tracking-wider uppercase text-muted-foreground">
												{result.song.author}
											</p>
										{/if}
									</div>
								</button>
							</li>
						{/each}
					</ul>
				{:else}
					<!-- Empty state - show all songs -->
					<div class="p-3">
						<p class="label-xs mb-2 px-1">
							Toate cântecele
						</p>
						<ul class="divide-y divide-border/30 border border-border/30">
							{#each songs as song (song.id)}
								<li>
									<button
										onclick={() => handleSelect(song.id)}
										class="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted/50"
									>
										<span class="flex-1 truncate text-sm font-medium text-foreground">
											{song.title}
										</span>
										<CategoryBadge category={song.category} size="sm" />
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
