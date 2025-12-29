<script lang="ts">
	import { createSongSearch } from '$lib/search';
	import type { Song } from '$lib/types';
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

	let { songs, isOpen, onClose, onSelectSong }: Props = $props();

	let query = $state('');
	let inputRef = $state<HTMLInputElement | null>(null);

	const searcher = $derived(createSongSearch(songs));
	const results = $derived(query.trim() ? searcher.search(query) : []);

	// Focus input when modal opens
	$effect(() => {
		if (isOpen && inputRef) {
			// Small delay to ensure the modal is visible
			setTimeout(() => inputRef?.focus(), 100);
		}
		if (!isOpen) {
			query = '';
		}
	});

	function handleSelect(songId: string) {
		onSelectSong(songId);
		onClose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop -->
	<button
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
		onclick={onClose}
		aria-label="Close search"
		tabindex="-1"
	></button>

	<!-- Modal -->
	<div class="fixed inset-x-4 top-4 z-50 mx-auto max-w-lg safe-top">
		<div class="overflow-hidden rounded-2xl bg-card shadow-2xl">
			<!-- Search Header -->
			<div class="flex items-center gap-2 border-b border-border p-3">
				<Search class="h-5 w-5 shrink-0 text-muted-foreground" />
				<input
					bind:this={inputRef}
					bind:value={query}
					type="text"
					placeholder="Caută cântece..."
					class="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
				/>
				<button
					onclick={onClose}
					class="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
					aria-label="Close"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Results -->
			<div class="max-h-[60vh] overflow-y-auto overscroll-contain">
				{#if query.trim() && results.length === 0}
					<div class="flex flex-col items-center justify-center py-12 text-muted-foreground">
						<Music class="mb-2 h-10 w-10 opacity-50" />
						<p class="text-sm">Niciun rezultat pentru "{query}"</p>
					</div>
				{:else if results.length > 0}
					<ul class="divide-y divide-border">
						{#each results as result (result.song.id)}
							<li>
								<button
									onclick={() => handleSelect(result.song.id)}
									class="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-accent"
								>
									<div class="flex-1 min-w-0">
										<div class="flex items-center gap-2">
											<span class="truncate font-medium text-foreground">
												{result.song.title}
											</span>
											<CategoryBadge category={result.song.category} size="sm" />
										</div>
										{#if result.song.author}
											<p class="mt-0.5 truncate text-sm text-muted-foreground">
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
						<p class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
							Toate cântecele
						</p>
						<ul class="divide-y divide-border rounded-lg border border-border">
							{#each songs as song (song.id)}
								<li>
									<button
										onclick={() => handleSelect(song.id)}
										class="flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-accent"
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

